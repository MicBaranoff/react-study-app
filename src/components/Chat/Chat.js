import React from "react";
import Message from '../Message';


let messageInput = React.createRef();
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.chatData = props.dialogsData.list[0].chat;
    }

    onChangeMessage() {
        let text = messageInput.current.value;
        this.props.updateNewMessage(text);
    }

    sendBtnHandler() {
        let text = messageInput.current.value;
        this.props.sendMessage(text);
    }

    render() {
        return (
                <section className="chat">
                    <div className="header-chat">
                        <p className="name">Megan Leib</p>
                    </div>
                    <div className="messages-chat">
                        {
                            this.chatData.map((message, index) =>
                        <Message key={index} self={message.self} text={message.text} image={message.avatar}></Message>)
                        }
                    </div>
                    <div className="footer-chat">
                        <i className="icon fa fa-smile-o clickable" aria-hidden="true"></i>
                        <input onChange={this.onChangeMessage.bind(this)} ref={messageInput} type="text" className="write-message"
                            placeholder="Type your message here" value={this.props.dialogsData.newMessage}></input>
                        <button onClick={this.sendBtnHandler.bind(this)} className="icon send clickable">
                            Send
                        </button>
                    </div>
                </section>
            )
    }
}

export default Chat;