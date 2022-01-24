import {List} from "@material-ui/core";
import propTypes from "prop-types";

export const MessageList = (props) => {
    return (
        <List>
            {props.MessageList.map ((item) => (
                <Message key = {item.id} {...item} />
            ))}
        </List>
    );
};

MessageLsit.propTypes = {
    messageList:propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.string,
            author: propTypes.string
        })
    )
};
MessageList.defaultProps = {
    messageList:[]
};