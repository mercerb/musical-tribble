/* sample message:
{"type": "message", "text": "\u2019sudo salt \u2018dockb827ebb349c9\u2019 test.ping\u2019", "user": "U7P8Y9QQN", "ts": "1508785065.000214", "team": "T0NFWG5B6"}
*/

export interface slackMessage {
    type: string;
    text: string;
    user: string;
    ts: string;
    team: string;
}

export function getMessages() {
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
