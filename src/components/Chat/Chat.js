import React from "react";
import Message from '../Message'

let messageInput = React.createRef();
const chat = ({data, newMessage, sendMessage, updateNewMessage}) => {
    const chatData = data;
    const onChangeMessage = () => {
        let text = messageInput.current.value;
        updateNewMessage(text);
    }
    const sendBtnHandler = () => {
        let text = messageInput.current.value;
        sendMessage(text);
    }
    return (
        <section className="chat">
            <div className="header-chat">
                <p className="name">Megan Leib</p>
            </div>
            <div className="messages-chat">
                {
                    chatData.map((message, index) =>
                        <Message key={index} self={message.self} text={message.text} image={message.avatar}></Message>)
                }
            </div>
            <div className="footer-chat">
                <i className="icon fa fa-smile-o clickable" aria-hidden="true"></i>
                <input onChange={onChangeMessage} ref={messageInput} type="text" className="write-message"
                       placeholder="Type your message here" value={newMessage}></input>
                <button onClick={sendBtnHandler} className="icon send clickable">
                    Send
                </button>
            </div>
        </section>
    )
}

export default chat;