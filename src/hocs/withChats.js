import { Component, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors.js";
import { createChat, removeChat } from "../store/chats/actions";



export const withChats = (Comment) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            dispatch(createChat('chat name'))
        }, []);

        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))

        }, [])

        return <Component
            {...props}
            chats={chats}
            onCreateChat={onCreateChat}
            onDeleteChat={onDeleteChat}
        />
    }
}