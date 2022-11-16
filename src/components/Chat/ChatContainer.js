import React from "react";
import Message from '../Message'
import {updateNewMessageActionCreator,sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Chat from "./Chat";

let messageInput = React.createRef();

const chatContainer = ({data, dispatch, newMessage}) => {
    const updateNewMessage = (text) => {
        dispatch(updateNewMessageActionCreator(text));
    }
    const sendMessage = (text) => {
        if (text) dispatch(sendMessageActionCreator());
        dispatch(updateNewMessageActionCreator(''));
    }
    return (
        <Chat
            data={data}
            newMessage={newMessage}
            updateNewMessage={updateNewMessage}
            sendMessage={sendMessage}
        />
    )
}

export default chatContainer;