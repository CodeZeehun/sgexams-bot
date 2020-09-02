export abstract class CommandNamesAndDescriptions {
    /** Message Checker Commands */
    public static readonly MSGCHECKER_LIST_WORDS_COMMAND_NAME = 'MsgCheckerListWords';

    public static readonly MSGCHECKER_LIST_WORDS_COMMAND_DESCRIPTION = 'Displays all blacklisted words.';

    public static readonly MSGCHECKER_ADD_WORD_COMMAND_NAME = 'MsgCheckerAddWords';

    public static readonly MSGCHECKER_ADD_WORD_COMMAND_DESCRIPTION = 'Add word(s) to the blacklist.';

    public static readonly MSGCHECKER_REMOVE_WORD_COMMAND_NAME = 'MsgCheckerRemoveWords';

    public static readonly MSGCHECKER_REMOVE_WORD_COMMAND_DESCRIPTION = 'Remove word(s) from the blacklist.';

    public static readonly MSGCHECKER_SET_REPORT_CHANNEL_COMMAND_NAME = 'MsgCheckerSetReportChannel';

    public static readonly MSGCHECKER_SET_REPORT_CHANNEL_COMMAND_DESCRIPTION
        = 'Sets the reporting channel to post incident reports for this server when blacklisted words are used.';

    public static readonly MSGCHECKER_GET_REPORT_CHANNEL_COMMAND_NAME = 'MsgCheckerGetReportChannel';

    public static readonly MSGCHECKER_GET_REPORT_CHANNEL_COMMAND_DESCRIPTION
        = 'Displays the reporting channel to post incident reports for this server when blacklisted words are used.';

    public static readonly MSGCHECKER_SET_RESPONSE_MESSAGE_COMMAND_NAME = 'MsgCheckerSetResponseMsg';

    public static readonly MSGCHECKER_SET_RESPONSE_MESSAGE_COMMAND_DESCRIPTION
        = 'Sets the response message to the user upon detection of blacklisted words for this server.';

    public static readonly MSGCHECKER_GET_RESPONSE_MESSAGE_COMMAND_NAME = 'MsgCheckerGetResponseMsg';

    public static readonly MSGCHECKER_GET_RESPONSE_MESSAGE_COMMAND_DESCRIPTION
        = 'Displays the response message to the user upon detection of blacklisted words for this server.';

    public static readonly MSGCHECKER_SET_DELETE_MESSAGE_COMMAND_NAME = 'MsgCheckerSetDeleteMsg';

    public static readonly MSGCHECKER_SET_DELETE_MESSAGE_COMMAND_DESCRIPTION
        = 'Sets whether the bot should delete instances of blacklisted words being used.';

    public static readonly MSGCHECKER_COMMANDS = [
        CommandNamesAndDescriptions.MSGCHECKER_LIST_WORDS_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_ADD_WORD_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_REMOVE_WORD_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_SET_REPORT_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_GET_REPORT_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_SET_RESPONSE_MESSAGE_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_GET_RESPONSE_MESSAGE_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_SET_DELETE_MESSAGE_COMMAND_NAME,
    ];

    public static readonly MSGCHECKER_DESCRIPTIONS = [
        CommandNamesAndDescriptions.MSGCHECKER_LIST_WORDS_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_ADD_WORD_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_REMOVE_WORD_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_SET_REPORT_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_GET_REPORT_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_SET_RESPONSE_MESSAGE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_GET_RESPONSE_MESSAGE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_SET_DELETE_MESSAGE_COMMAND_DESCRIPTION,
    ];

    public static readonly MSGCHECKER_COMMANDS_LOWERCASE
        = CommandNamesAndDescriptions.MSGCHECKER_COMMANDS.map((x) => x.toLowerCase());

    /** Starboard Commands */
    public static readonly STARBOARD_SET_CHANNEL_COMMAND_NAME = 'StarboardSetChannel';

    public static readonly STARBOARD_SET_CHANNEL_COMMAND_DESCRIPTION
        = 'Sets the Starboard channel where the bot will star messages.'

    public static readonly STARBOARD_GET_CHANNEL_COMMAND_NAME = 'StarboardGetChannel';

    public static readonly STARBOARD_GET_CHANNEL_COMMAND_DESCRIPTION
        = 'Displays the currently set Starboard channel';

    public static readonly STARBOARD_ADD_EMOJI_COMMAND_NAME = 'StarboardAddEmoji';

    public static readonly STARBOARD_ADD_EMOJI_COMMAND_DESCRIPTION
        = 'Adds a Starboard emoji that the bot will look out for.';

    public static readonly STARBOARD_REMOVE_EMOJI_COMMAND_NAME = 'StarboardRemoveEmoji';

    public static readonly STARBOARD_REMOVE_EMOJI_COMMAND_DESCRIPTION
        = 'Removes a Starboard emoji.';

    public static readonly STARBOARD_GET_EMOJI_COMMAND_NAME = 'StarboardGetEmoji';

    public static readonly STARBOARD_GET_EMOJI_COMMAND_DESCRIPTION
        = 'Displays the currently set Starboard emojis';

    public static readonly STARBOARD_SET_THRESHOLD_COMMAND_NAME = 'StarboardSetThreshold';

    public static readonly STARBOARD_SET_THRESHOLD_COMMAND_DESCRIPTION
        = 'Sets the emoji threshold for a message to be starred.'

    public static readonly STARBOARD_GET_THRESHOLD_COMMAND_NAME = 'StarboardGetThreshold';

    public static readonly STARBOARD_GET_THRESHOLD_COMMAND_DESCRIPTION
        = 'Displays the emoji threshold for a message to be starred.';

    public static readonly STARBOARD_COMMANDS = [
        CommandNamesAndDescriptions.STARBOARD_SET_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_GET_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_ADD_EMOJI_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_REMOVE_EMOJI_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_GET_EMOJI_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_SET_THRESHOLD_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_GET_THRESHOLD_COMMAND_NAME,
    ];

    public static readonly STARBOARD_DESCRIPTIONS = [
        CommandNamesAndDescriptions.STARBOARD_SET_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_GET_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_ADD_EMOJI_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_REMOVE_EMOJI_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_GET_EMOJI_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_SET_THRESHOLD_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_GET_THRESHOLD_COMMAND_DESCRIPTION,
    ];

    public static readonly STARBOARD_COMMANDS_LOWERCASE
        = CommandNamesAndDescriptions.STARBOARD_COMMANDS.map((x) => x.toLowerCase());

    /** Misc Commands */
    public static readonly ROTATE_IMAGE_COMMAND_NAME = 'Rotate';

    public static readonly ROTATE_IMAGE_COMMAND_DESCRIPTION
        = 'Rotates an image by 90 degrees via reactions.';

    public static readonly UPTIME_CHECK_COMMAND_NAME = 'Uptime';

    public static readonly UPTIME_CHECK_COMMAND_DESCRIPTION =
        'Returns how long the bot has been online for.';

    public static readonly OKBOOMER_COMMAND_NAME = 'Okboomer';

    public static readonly OKBOOMER_COMMAND_DESCRIPTION
        = 'Reacts "Ok Boomer" onto a specified message.';

    public static readonly OKZOOMER_COMMAND_NAME = 'Okzoomer';

    public static readonly OKZOOMER_COMMAND_DESCRIPTION
        = 'Reacts "Ok Zoomer" onto a specified message.';

    public static readonly MISC_COMMANDS = [
        CommandNamesAndDescriptions.ROTATE_IMAGE_COMMAND_NAME,
        CommandNamesAndDescriptions.UPTIME_CHECK_COMMAND_NAME,
        CommandNamesAndDescriptions.OKBOOMER_COMMAND_NAME,
        CommandNamesAndDescriptions.OKZOOMER_COMMAND_NAME,
    ];

    public static readonly MISC_DESCRIPTIONS = [
        CommandNamesAndDescriptions.ROTATE_IMAGE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.UPTIME_CHECK_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.OKBOOMER_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.OKZOOMER_COMMAND_DESCRIPTION,
    ];

    public static readonly MISC_COMMANDS_LOWERCASE
        = CommandNamesAndDescriptions.MISC_COMMANDS.map((x) => x.toLowerCase());

    /** Help Commands */
    public static readonly HELP_COMMAND_NAME = 'Help';

    public static readonly HELP_COMMAND_DESCRIPTION
        = 'Displays all the available commands that this bot listens to.';

    public static readonly MSGCHECKER_HELP_COMMAND_NAME = 'MsgCheckerHelp';

    public static readonly MSGCHECKER_HELP_COMMAND_DESCRIPTION
        = 'Displays available commands for the Message Checker function.';

    public static readonly STARBOARD_HELP_COMMAND_NAME = 'StarboardHelp';

    public static readonly STARBOARD_HELP_COMMAND_DESCRIPTION
        = 'Displays available commands for the Starboard function.';

    public static readonly MISC_COMMAND_HELP_COMMAND_NAME = 'MiscHelp';

    public static readonly MISC_COMMAND_HELP_COMMAND_DESCRIPTION
        = 'Displays other Miscellaneous commands';

    public static readonly MODERATION_HELP_COMMAND_NAME = 'ModHelp'

    public static readonly MODERATION_HELP_COMMAND_DESCRIPTION
        = 'Displays other Moderation commands';

    public static readonly HELP_COMMANDS = [
        CommandNamesAndDescriptions.HELP_COMMAND_NAME,
        CommandNamesAndDescriptions.MSGCHECKER_HELP_COMMAND_NAME,
        CommandNamesAndDescriptions.STARBOARD_HELP_COMMAND_NAME,
        CommandNamesAndDescriptions.MISC_COMMAND_HELP_COMMAND_NAME,
        CommandNamesAndDescriptions.MODERATION_HELP_COMMAND_NAME,
    ];

    public static readonly HELP_DESCRIPTIONS = [
        CommandNamesAndDescriptions.HELP_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MSGCHECKER_HELP_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.STARBOARD_HELP_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MISC_COMMAND_HELP_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MODERATION_HELP_COMMAND_DESCRIPTION,
    ];

    public static readonly HELP_COMMANDS_LOWERCASE
        = CommandNamesAndDescriptions.HELP_COMMANDS.map((x) => x.toLowerCase());

    /** Moderation Commands */
    public static readonly WARN_COMMAND_NAME = 'Warn';

    public static readonly WARN_COMMAND_DESCRIPTION = 'Warns a User.';

    public static readonly KICK_COMMAND_NAME = 'Kick';

    public static readonly KICK_COMMAND_DESCRIPTION = 'Kicks a User.';

    public static readonly BAN_COMMAND_NAME = 'Ban';

    public static readonly BAN_COMMAND_DESCRIPTION = 'Bans a User.';

    public static readonly BANRM_COMMAND_NAME = 'BanRM'

    public static readonly BANRM_COMMAND_DESCRIPTION = 'Bans a User and removes all messages sent by the user in the last 24 hours.'

    public static readonly PURGE_COMMAND_NAME = 'Purge';

    public static readonly PURGE_COMMAND_DESCRIPTION = 'Purges messages.';

    public static readonly UNBAN_COMMAND_NAME = 'Unban';

    public static readonly UNBAN_COMMAND_DESCRIPTION = 'Unbans a User.';

    public static readonly UNWARN_COMMAND_NAME = 'Unwarn'

    public static readonly UNWARN_COMMAND_DESCRIPTION = 'Undo a warn case.';

    public static readonly MUTE_COMMAND_NAME = 'Mute'

    public static readonly MUTE_COMMAND_DESCRIPTION = 'Mutes a User.';

    public static readonly UNMUTE_COMMAND_NAME = 'Unmute'

    public static readonly UNMUTE_COMMAND_DESCRIPTION = 'Unmutes a User.';

    public static readonly SET_WARN_PUNISHMENTS_COMMAND_NAME = 'SetWarnPunishments';

    public static readonly SET_WARN_PUNISHMENTS_COMMAND_DESCRIPTION = 'Sets Warn threshold punishments';

    public static readonly GET_WARN_PUNISHMENTS_COMMAND_NAME = 'GetWarnPunishments';

    public static readonly GET_WARN_PUNISHMENTS_COMMAND_DESCRIPTION = 'Gets Warn threshold punishments';

    public static readonly SET_MODLOG_CHANNEL_COMMAND_NAME = 'SetModLogChannel';

    public static readonly SET_MODLOG_CHANNEL_COMMAND_DESCRIPTION
        = 'Sets the ModLog reporting channel.';

    public static readonly GET_MODLOG_CHANNEL_COMMAND_NAME = 'GetModLogChannel';

    public static readonly GET_MODLOG_CHANNEL_COMMAND_DESCRIPTION
        = 'Displays the currently set ModLog channel';

    public static readonly MOD_LOGS_COMMAND_NAME = 'ModLogs';

    public static readonly MOD_LOGS_COMMAND_DESCRIPTION
        = 'Displays Moderation Logs';

    public static readonly SET_MUTE_ROLE_COMMAND_NAME = 'SetMuteRole';

    public static readonly SET_MUTE_ROLE_COMMAND_DESCRIPTION
        = 'Sets the Mute Role.';

    public static readonly GET_MUTE_ROLE_COMMAND_NAME = 'GetMuteRole';

    public static readonly GET_MUTE_ROLE_COMMAND_DESCRIPTION
        = 'Displays the currently set Mute Role';

    public static readonly MODERATION_COMMANDS = [
        CommandNamesAndDescriptions.KICK_COMMAND_NAME,
        CommandNamesAndDescriptions.BAN_COMMAND_NAME,
        CommandNamesAndDescriptions.BANRM_COMMAND_NAME,
        CommandNamesAndDescriptions.UNBAN_COMMAND_NAME,
        CommandNamesAndDescriptions.MUTE_COMMAND_NAME,
        CommandNamesAndDescriptions.UNMUTE_COMMAND_NAME,
        CommandNamesAndDescriptions.WARN_COMMAND_NAME,
        CommandNamesAndDescriptions.UNWARN_COMMAND_NAME,
        CommandNamesAndDescriptions.PURGE_COMMAND_NAME,
        CommandNamesAndDescriptions.SET_MUTE_ROLE_COMMAND_NAME,
        CommandNamesAndDescriptions.GET_MUTE_ROLE_COMMAND_NAME,
        CommandNamesAndDescriptions.SET_WARN_PUNISHMENTS_COMMAND_NAME,
        CommandNamesAndDescriptions.GET_WARN_PUNISHMENTS_COMMAND_NAME,
        CommandNamesAndDescriptions.SET_MODLOG_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.GET_MODLOG_CHANNEL_COMMAND_NAME,
        CommandNamesAndDescriptions.MOD_LOGS_COMMAND_NAME,
    ]

    public static readonly MODERATION_DESCRIPTIONS = [
        CommandNamesAndDescriptions.KICK_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.BAN_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.BANRM_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.UNBAN_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MUTE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.UNMUTE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.WARN_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.UNWARN_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.PURGE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.SET_MUTE_ROLE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.GET_MUTE_ROLE_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.SET_WARN_PUNISHMENTS_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.GET_WARN_PUNISHMENTS_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.SET_MODLOG_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.GET_MODLOG_CHANNEL_COMMAND_DESCRIPTION,
        CommandNamesAndDescriptions.MOD_LOGS_COMMAND_DESCRIPTION,
    ]

    public static readonly MODERATION_COMMANDS_LOWERCASE
        = CommandNamesAndDescriptions.MODERATION_COMMANDS.map((x) => x.toLowerCase());
}
