import React from "react";
import Message from '../Message'

let messageInput = React.createRef();
const chat = (props) => {
    console.log(props);
    const chatData = props.dialogsData.list[0].chat;
    const onChangeMessage = () => {
        let text = messageInput.current.value;
        props.updateNewMessage(text);
    }
    const sendBtnHandler = () => {
        let text = messageInput.current.value;
        props.sendMessage(text);
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
                    placeholder="Type your message here" value={props.dialogsData.newMessage}></input>
                <button onClick={sendBtnHandler} className="icon send clickable">
                    Send
                </button>
            </div>
        </section>
    )
}

export default chat;