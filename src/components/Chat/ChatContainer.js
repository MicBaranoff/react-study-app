import React from "react";
import {updateNewMessageActionCreator,sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";
import withAuthRedirectComponent from "../../HOC/AuthRedirect";
import withRouter from "../../HOC/withRouter";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsReducer,
        isAuth: state.authReducer.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            if (text) dispatch(sendMessageActionCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent,
    withRouter,
)(Chat);