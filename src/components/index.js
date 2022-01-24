import  { useState, useEffect } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "/components/Chatlist";
import {MessageInput} from "./component/MessageInput";
import {MessageList} from "./components/MessageList";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColums: "200px 1fr"
    }
});

export const Format = () => {
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (author,text) =>{
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            id: Date.now(),        
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSendMessage = (value) => {
        sendMessage ("user",value);
    };

    useEffect(() => {
        if(messageList.length ===0) {
            return;
        }
        const tail = messageList[messageList.length -1];
        if(tail.author === "bot"){
            return;
        }
        sendMessage("bot","Welcome");
    },[messageList]);
    return (
        <div className={classes.wrapper}>
            <ChatList
            list={[
                {
                    name: "name",
                    id: "1"
                },
                {
                    name: "name",
                    id: "2"
                },
                {
                    name: "name",
                    id:"3"
                },
                {
                    name:"name",
                    id:"4"
                }

            ]}
            />
            <div>
                <MessageList messageList={messageList}/>
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>
        
    );
 };


    