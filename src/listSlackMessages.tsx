import React, { useState, useEffect } from "react";

import SlackMessages, { SlackMessage } from "./parseSlackMessages";
import useInfiniteScroll from "./useInfiniteScroll";
import MessageCard from "./Message";
const data = require("./data/mercer.json");

export function ListSlackMessages() {
    const slackMessages = SlackMessages.fromConfig(data);
    const allMessages = slackMessages.getMessages();
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
            { messages.map(message => (
                <MessageCard 
                    data={message} 
                    color={slackMessages.getColorFromUser(message.user)}
                    name={slackMessages.getNameFromUserId(message.user)} />
            )) }
        </ul>
    );
}
