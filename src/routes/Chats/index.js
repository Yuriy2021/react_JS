import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ChatList } from "../../components/ChatList";
import { Messages } from "../Messages";
import { CHATS } from "../../mocks/chats";

const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <ChatList list={CHATS} />
            <div>
                <Routes>
                    <Route element={<Messages />} path="/chats/:chatId" />
                </Routes>
            </div>
        </div>
    );
};