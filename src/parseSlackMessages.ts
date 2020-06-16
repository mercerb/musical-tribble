/* sample message:
{"type": "message", "text": "\u2019sudo salt \u2018dockb827ebb349c9\u2019 test.ping\u2019", "user": "U7P8Y9QQN", "ts": "1508785065.000214", "team": "T0NFWG5B6"}
*/

// import * as data from "./data/mercer.json";
export interface SlackMessage {
    type: string;
    text: string;
    user: string;
    ts: string;
    team: string;
    highlight: boolean;
}

export default class SlackMessages {
    constructor(private readonly messages: SlackMessage[]) {}

    public getNameFromUserId(id: string) {
        switch (id) {
            case "U7P8Y9QQN":
                return "Mercer";
            case "U5T39MAJ2":
                return "Luke";
            default:
                return id;
        }
    }

    public getColorFromUser(id: string) {
        const name = this.getNameFromUserId(id);
        switch (name) {
            case "Luke":
                return "beige";
            case "Mercer":
                return "light-blue";
            default:
                return "white";
        }
    }

    public getFavoriteMessages() {
        return this.messages.filter(m => m.highlight);
    }

    public getMessages() {
        return this.messages;
    }

    public static fromConfig(data: any) {
        return new SlackMessages(data as SlackMessage[]);
    }
}


export function getSampleMessages() {
    return [
        {
            type: "message1",
            text: "\u2019sudo salt \u2018dockb827ebb349c9\u2019 test.ping\u2019",
            user: "U7P8Y9QQN",
            ts: "1508785065.000214",
            team: "T0NFWG5B6"
        },
        {
            type: "message2",
            text: "\u2019sudo salt \u2018dockb827ebb349c9\u2019 test.ping\u2019",
            user: "U7P8Y9QQN",
            ts: "1508785065.000214",
            team: "T0NFWG5B6"
        },
        {
            type: "message3",
            text: "\u2019sudo salt \u2018dockb827ebb349c9\u2019 test.ping\u2019",
            user: "U7P8Y9QQN",
            ts: "1508785065.000214",
            team: "T0NFWG5B6"
        }
    ];
}
