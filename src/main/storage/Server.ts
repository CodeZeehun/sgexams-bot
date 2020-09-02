import { MessageCheckerSettings, MessageCheckerSettingsObj } from './MessageCheckerSettings';
import { StarboardSettings, StarboardSettingsObj } from './StarboardSettings';

interface ServerObj {
    serverId: string;
    messageCheckerSettings: MessageCheckerSettingsObj;
    starboardSettings: StarboardSettingsObj;
}

/** This class represents a server object that the bot references from */
export class Server {
    public serverId: string;

    public messageCheckerSettings: MessageCheckerSettings;

    public starboardSettings: StarboardSettings;

    public constructor(serverId: string,
                       messageCheckerSettings: MessageCheckerSettings,
                       starboardSettings: StarboardSettings) {
        this.serverId = serverId;
        this.messageCheckerSettings = messageCheckerSettings;
        this.starboardSettings = starboardSettings;
    }

    /**
     * Tests if server objects are the same.
     *
     * @param {Server} other
     */
    public equals(other: Server): boolean {
        if (this.serverId !== other.serverId) return false;

        if (!this.messageCheckerSettings.equals(other.messageCheckerSettings)) return false;

        if (!this.starboardSettings.equals(other.starboardSettings)) return false;

        return true;
    }

    /**
     * This function converts an object back into a server object
     * Used for deserialising.
     *
     * @param  {any} obj
     * @returns Server
     */
    /* eslint-disable @typescript-eslint/no-explicit-any */
    public static convertFromJsonFriendly(obj: ServerObj): Server {
        // Check attributes
        if (!(obj.hasOwnProperty('messageCheckerSettings')
             && obj.hasOwnProperty('serverId'))) {
            throw new Error('Object is not valid');
        }

        let starboardSettings: StarboardSettings;
        if (!obj.hasOwnProperty('starboardSettings')) {
            starboardSettings = new StarboardSettings(null, null, null);
        } else {
            starboardSettings = StarboardSettings.convertFromJsonFriendly(obj.starboardSettings);
        }

        const { serverId } = obj;
        const messageCheckerSettings
            = MessageCheckerSettings.convertFromJsonFriendly(obj.messageCheckerSettings);
        return new Server(serverId, messageCheckerSettings, starboardSettings);
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
