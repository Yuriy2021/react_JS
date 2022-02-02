import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Messages } from "../Messages";
import { getChatList } from "../../store/chats/selectors.js";
import { createChat, removeChat, setChats } from "../../store/chats/actions";
import { nanoid } from "nanoid";
import { CHATS } from "../../mocks/chats";
import { removeMessagesByChatID } from "../../store/messages/actions";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();
    const chats = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
        dispatch(createChat({
            id: nanoid(),
            name: 'chatName'
        }))
    }, []);
    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    }
    useEffect(() => {
        dispatch(setChats(CHATS))
    }, [])
    return (

        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list={chats} />
                <Button onClick={onCreate}> Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};