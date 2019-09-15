import React, { useState, useEffect } from "react";

import { getMessages, SlackMessage } from "./parseSlackMessages";
import useInfiniteScroll from "./useInfiniteScroll";
export function ListSlackMessages() {
    const allMessages = getMessages();
    const [messages, setMessages] = useState<SlackMessage[] | undefined>(undefined);
    const [offset, setOffset] = useState<number>(0);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
            let newOffset = offset + 20;
            setMessages(allMessages.slice(0, offset + 20));
            // @ts-ignore
            setIsFetching(false);
            setOffset(newOffset);
        }, 1000);
    }

    useEffect(() => {
        setMessages(allMessages.slice(0, offset + 30));
    }, []);

    return !messages ? (
        <div>No messages</div>
    ) : (
        <ul>
            {messages.map(({ user, text, ts }) => (
                <li key={ts}>
                    <li>
                        <a>{user === "U7P8Y9QQN" ? "Mercer" : "Luke"}</a>
                    </li>
                    <li>{text}</li>
                </li>
            ))}
        </ul>
    );
}
