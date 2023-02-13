import React from "react";
import PostInput from "./PostInput";
import {addPostActionCreator,updateNewPostTitleActionCreator,updateNewPostTextActionCreator} from "../../redux/posts-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.postsReducer,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (post) => {
            dispatch(addPostActionCreator(post));
        },
        updateNewPostTitle: (text) => {
            dispatch(updateNewPostTitleActionCreator(text));
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    };
}

const postInput = connect(mapStateToProps, mapDispatchToProps)(PostInput);

export default postInput;