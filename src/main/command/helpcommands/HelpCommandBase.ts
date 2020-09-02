import { MessageEmbed } from 'discord.js';
import { Command } from '../Command';
import { CommandResult } from '../classes/CommandResult';

export abstract class HelpCommandBase extends Command {
    /** CheckMessage: true */
    protected COMMAND_SUCCESSFUL_COMMANDRESULT: CommandResult = new CommandResult(true);

    /**
     * Generates embed to be sent back to user.
     *
     * @param  {string} header Title of command
     * @param  {string[]} commands Commands in the module
     * @param  {string[]} descriptions Descriptions of the commands in the module
     * @returns RichEmbed
     */
    protected generateEmbed(header: string, commands: string[],
                            descriptions: string[]): MessageEmbed {
        const embed = new MessageEmbed();
        embed.setColor(Command.EMBED_DEFAULT_COLOUR);

        let output = '';
        for (let i = 0; i < commands.length; i++) {
            output += `**${commands[i]}** - ${descriptions[i]}\n`;
        }

        embed.addField(header, output);
        return embed;
    }
}
