import React from "react";
import Message from '../Message';
import {Field, reduxForm} from "redux-form";


let messageInput = React.createRef();

const ChatForm = (props) => {
    return (
        <div className="footer-chat">
            <i className="icon fa fa-smile-o clickable" aria-hidden="true"></i>
            <form onSubmit={props.handleSubmit}>
                <Field
                    component={'input'}
                    name={'message'}
                    ref={messageInput} type="text"
                    className="write-message"
                    placeholder="Type your message here"/>
                <button className="icon send clickable">
                    Send
                </button>
            </form>
        </div>
    )
}

const ReduxMessageForm = reduxForm({
    form: 'chat'
})(ChatForm)

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.chatData = props.dialogsData.list[0].chat;
    }

    onChangeMessage() {
        let text = messageInput.current.value;
        this.props.updateNewMessage(text);
    }

    sendBtnHandler(value) {
        let text = messageInput.current.value;
        this.props.sendMessage(value);
    }

    onSubmit = (formData) => {
        this.sendBtnHandler(formData.message)
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
                    <ReduxMessageForm
                        onSubmit={this.onSubmit}
                        dialogsData={this.props.dialogsData}
                        sendBtnHandler={this.sendBtnHandler.bind(this)}/>
                </section>
            )
    }
}

export default Chat;