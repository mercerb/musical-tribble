import React, { useState, useEffect } from "react";

import { getMessages, SlackMessage } from "./parseSlackMessages";

export function ListSlackMessages() {
    const [messages, setMessages] = useState<SlackMessage[] | undefined>(undefined);

    useEffect(() => {
        let messages = [];
        messages = getMessages();
        setMessages(messages);
    }, [messages]);

    return !messages ? (
        <div>No messages</div>
    ) : (
        <ul>
            {messages.map(({ user, text, ts }) => (
                <li key={ts}>
                    <ul>
                        <li>
                            <a>{user}</a>
                        </li>
                        <li>{text}</li>
                    </ul>
                </li>
            ))}
        </ul>
    );
}
