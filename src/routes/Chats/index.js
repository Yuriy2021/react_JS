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
import { withChats } from "../../hocs/withChats";


const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});
export const ChatsRender = ({
    chats,
    onCreateChat,
    onDeleteChat
}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDeleteChat} list={chats} />
                <Button onClick={onCreateChat}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};
export const Chats = withChats(ChatsRender);