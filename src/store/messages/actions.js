import { BOT_AUTHOR } from "../../constants/authors";
import { createMessage } from "../../helpers";
import { messageRef } from "../../api/firebase";

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const REMOVE_MESSAGES_BY_CHAT_ID = 'REMOVE_MESSAGES_BY_CHAT_ID'


export const addMessage = (message, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        chatId,
    },
})

export const removeMessagesByChatID = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId
})

export const removeMessagesByChatID = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId
})
export const removeMessagesByChatIDWithThunk = (chatId) => (dispatch) => {
    messageRef.child(chatId).remove(() => {
        dispatch(removeMessagesByChatID(chatId));
    })
}
export const sendMessageWithThunk = (author, text, chatId) => (dispatch) => {
    const userMessage = createMessage(author, text)
    dispatch(addMessage(userMessage, chatId));

    if (author === BOT_AUTHOR) {
        return;
    }
    const botMessage = createMessage(BOT_AUTHOR, 'Hello')
    dispatch(addMessage(botMessage, chatId));
}

export const addMessageWithThunk = (message, chatId) => () => {
    messageRef.child(chatId).push(message);
}

export const onTrackingAddMessageWithThunk = (chatId) => (dispatch) => {
    messageRef.child(chatId).on('child_added', (snapshot) => {
        dispatch(addMessage(mapMessageSnapshotToMessage(snapshot), chatId))
    })
}
export const offTrackingAddMessageWithThunk = (chatId) => () => {
    messageRef.child(chatId).off('child_added')
}

export const onTrackingRemovedMessageWithThunk = (chatId) => (dispatch) => {
    messageRef.child(chatId).on('child_removed', () => {
        dispatch(removeMessagesByChatID(chatId));
    })
}

export const offTrackingRemovedMessageWithThunk = (chatId) => () => {
    messageRef.child(chatId).off('child_removed')
}