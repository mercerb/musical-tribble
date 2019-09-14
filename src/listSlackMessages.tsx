import React from "react";
import { getMessages, slackMessage } from "./parseSlackMessages";

export function ReposGrid(id: any) {
    const [messages, setMessages] = React.useState<slackMessage[] | undefined>(undefined);

    React.useEffect(() => {
        let messages = [];
        messages = getMessages();
        setMessages(messages);
    });

    return (
        <ul>
            {messages: messages.map(({ user, text, ts }) => (
                <li key={user}>
                    <ul>
                        <li>
                            <a>{user}</a>
                        </li>
                        <li>text</li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}
