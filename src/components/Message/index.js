import React from 'react';
import styles from './Message.module.css';
import { useState, useEffect } from 'react';


export const Message = ({ color, text }) => {
    return (<span className={[styles.reset,
    color === 'primary' ? styles.primary : '',
    color === 'alert' ? styles.alert : ''].join(' ')}> {text} </span>)
}
export const MessageList = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState(" ");

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const resetForm = () => {
        setValue("");
    }
    const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        resetForm();
    };
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };
    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author === "bot") {
            return;
        }
        sendMessage("bot", "welcome");
    }, [messageList]);

    return (
        <div className="App-forma">
            <form onSubmit={onSubmitMessage}>
                <input
                    onChange={onChangeMessageInput}
                    placeholder="type message"
                    value={value}
                    type="text"
                />
                <button>send</button>
            </form>
            <ul>
                {
                    messageList.map((item, index) => (
                        <li key={index}>
                            {item.author} - {item.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};