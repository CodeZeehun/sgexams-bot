import { DatamuseApi } from './datamuseapi/DatamuseApi';
import { MessageCheckerResult } from './classes/MessageCheckerResult';
import { CharacterSubstitutor } from './charactersubstitutor/CharacterSubstitutor';
import { Context } from './classes/Context';
import { ComplexMessageParser } from './parser/ComplexMessageParser';
import { NaiveMessageParser } from './parser/NaiveMessageParser';

/** This class checks a message if it contains any banned words */
export class MessageChecker {
    /**
     * This function checks the message for banned words
     * Then it queries Datamuse API to get the best fit word
     * If the best fit word matches, then it is a false positive
     * Else it is not.
     *
     * @param  {string} content Content of the message
     * @param  {string[]} bannedWords Array of banned words
     * @returns Promise<MessageCheckerResult> Results of the check
     */
    public async checkMessage(content: string,
                              bannedWords: string[]): Promise<MessageCheckerResult> {
        // Removing diacritic accents
        // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
        // eslint-disable-next-line no-param-reassign
        content = content.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Generate contents
        let contents: string[] = [];
        // Push lower case
        contents.push(content.toLowerCase());
        // Generate other possible contents
        contents
            = contents.concat(new CharacterSubstitutor().convertText(content.toLowerCase()));

        // Checking for bad words
        const contextOfBannedWords: Context[] = [];
        const naiveMessageParser = new NaiveMessageParser();
        const complexMessageParser = new ComplexMessageParser().processBannedWords(bannedWords);

        for (const convertedContent of contents) {
            naiveMessageParser
                .checkForBannedWords(convertedContent, bannedWords)
                .getContextOfBannedWord(content, convertedContent, contextOfBannedWords);
            complexMessageParser
                .getContextOfBannedWord(content, convertedContent, contextOfBannedWords);
        }

        // Determine if the contexts of the banned words used was malicious
        const realBannedWords: Context[] = [];
        const promises: Promise<Context | null>[] = [];
        for (const context of contextOfBannedWords) {
            promises.push(this.checkContext(context));
        }

        const results = await Promise.all(promises);
        for (const result of results) {
            if (result !== null) {
                realBannedWords.push(result);
            }
        }

        // Create result and resolve promise
        let isGuilty: boolean;
        if (realBannedWords.length === 0) {
            isGuilty = false;
        } else {
            isGuilty = true;
        }
        const result = { guilty: isGuilty, contexts: realBannedWords };
        return result;
    }

    /**
     * This function determines if the context used was malicious
     *
     * @param  {Context} context containing banned word used & its context
     * @return Promise<Context | null> if the context is found to be a banned word
     */
    private async checkContext(context: Context): Promise<Context | null> {
        const { bannedWord } = context;
        const { convertedContext } = context;

        // If converted context has non-alphabetical chars, split it up by
        // non-alphabetical chars, not inclusive of '
        const nonAlphabetical = new RegExp(/[^a-z']/g);
        if (nonAlphabetical.test(convertedContext)) {
            // Split context up by non alphabetical chars
            let dummy = convertedContext;
            dummy = dummy.replace(nonAlphabetical, ' ');
            const words = dummy.split(/ +/g);

            // Check each splitted word, if all are legit words, pass this context
            const promises: Promise<boolean>[] = [];
            const legalOneLetterChars = new Set<string>(['a', 'i', 'u', 'o', 'm']);
            let isLegit = true;
            for (const word of words) {
                if (word.length === 1) {
                    if (!legalOneLetterChars.has(word)) {
                        isLegit = false;
                    }
                }
                promises.push(this.checkWord(word, bannedWord));
            }

            const results = await Promise.all(promises);
            for (const result of results) {
                if (result === true) {
                    isLegit = false;
                }
            }

            if (isLegit) {
                return null;
            }

            // Give second chance - test the word without any alphanumerics
            let word = '';
            for (const word_ of words) {
                word += word_;
            }

            const isBadWord = await this.checkWord(word, bannedWord);
            if (isBadWord)
                return context;
        } else { // Trivial check
            const isBadWord = await this.checkWord(convertedContext, bannedWord);
            if (isBadWord)
                return context;
        }

        return null;
    }

    /**
     * This function checks datamuse API with a given context vs bannedword
     *
     * @param  {string} context Context
     * @param  {string} bannedWord banned word
     */
    private async checkWord(context: string, bannedWord: string): Promise<boolean> {
        // If it's a perfect match with a banned word, no need to query.
        if (context === bannedWord) {
            return true;
        }

        // Query DatamuseAPI
        const datamuseQueryResults = await new DatamuseApi().checkSpelling(context);

        // If no results, is not a legitimate word, mark it.
        if (datamuseQueryResults.length === 0) {
            return true;
        }

        // if it does not match the top few (3 for now), mark it
        let canBeFound = false;
        let idx = 0;
        do {
            const bestFitWord = datamuseQueryResults[idx].word;

            // if the word can be found in the context, it is a legitimate word
            // this adds some tolerance to prevent false positives
            if (context.includes(bestFitWord)) {
                canBeFound = true;
            }

            // if I can find the banned word in the query, mark it.
            if (bannedWord === bestFitWord) {
                return true;
            }
            idx++;
        } while (idx < 3 && idx < datamuseQueryResults.length);

        // if it does not match the top few, mark it for now;
        // could be a masked banned word
        // downside: typos will get flagged too
        if (!canBeFound)
            return true;

        return false;
    }
}
