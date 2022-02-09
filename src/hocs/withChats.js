import { Component, useCallback } from "react";
import { useDispatch } from "react-redux";

export const withChats = (Comment) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            dispatch(addChat(createChat('chat name')))
        }, []);

        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessagesByChatID(chatId))
        }, [])

        return <Component
            {...props}
            chats={chats}
            onCreateChat={onCreateChat}
            onDeleteChat={onDeleteChat}
        />
    }
}