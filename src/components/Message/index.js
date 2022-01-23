import React from 'react';
import styles from './Message.module.css';
import { useState, useEffect, useRef } from 'react';
import { List } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

export const Chat = ({ name }) => {
    return (
        <ListItem>
            <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};
export const ChatList = ({ list }) => {
    return (
        <List>
            {list.map((item) => (
                <Chat key={item.id} {...item} />
            ))}
        </List>
    )
};
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
            text,
            id: Date.now()
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const inputRef = useRef();

    const resetForm = () => {
        setValue("");
    }
    const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        resetForm();
        inputRef.current.focus();
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
            <ChatList
                list={[
                    {
                        name: "chat1",
                        id: "1"
                    },
                    {
                        name: "chat2",
                        id: "2"
                    },
                    {
                        name: "chat3",
                        id: "3"
                    },
                    {
                        name: "chat4",
                        id: "4"
                    }
                ]}
            />
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