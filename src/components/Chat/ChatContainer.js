import React from "react";
import {updateNewMessageActionCreator,sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import withAuthRedirectComponent from "../../HOC/AuthRedirect";
import {compose} from "redux";

//let messageInput = React.createRef();
//
//const chatContainer = ({data, dispatch, newMessage}) => {
//    const updateNewMessage = (text) => {
//        dispatch(updateNewMessageActionCreator(text));
//    }
//    const sendMessage = (text) => {
//        if (text) dispatch(sendMessageActionCreator());
//        dispatch(updateNewMessageActionCreator(''));
//    }
//    return (
//        <Chat
//            data={data}
//            newMessage={newMessage}
//            updateNewMessage={updateNewMessage}
//            sendMessage={sendMessage}
//        />
//    )
//}

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducer,
        isAuth: state.authReducer.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        sendMessage: (text) => {
            if (text) dispatch(sendMessageActionCreator());
            dispatch(updateNewMessageActionCreator(''));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent,
)(Chat);