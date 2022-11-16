import React from "react";
import PostInput from "./PostInput";
import {addPostActionCreator,updateNewPostTitleActionCreator,updateNewPostTextActionCreator} from "../../redux/posts-reducer";

const postInput = ({dispatch, newPostTitle, newPostText, className}) => {
    const sendPost = () => {
        dispatch(addPostActionCreator());
        dispatch(updateNewPostTitleActionCreator(''));
        dispatch(updateNewPostTextActionCreator(''));
    }
    const updateNewPostTitle = (text) => {
        dispatch(updateNewPostTitleActionCreator(text));
    }
    const updateNewPostText = (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <PostInput
            newPostTitle={newPostTitle}
            newPostText={newPostText}
            className={className}
            updateNewPostTitle={updateNewPostTitle}
            updateNewPostText={updateNewPostText}
            sendPost={sendPost}
        />
    )
}

export default postInput;