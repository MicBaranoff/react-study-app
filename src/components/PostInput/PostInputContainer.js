import React from "react";
import PostInput from "./PostInput";
import {addPostActionCreator,updateNewPostTitleActionCreator,updateNewPostTextActionCreator} from "../../redux/posts-reducer";
import {connect} from "react-redux";

//const postInput = ({dispatch, newPostTitle, newPostText, className}) => {
//    const sendPost = () => {
//        dispatch(addPostActionCreator());
//        dispatch(updateNewPostTitleActionCreator(''));
//        dispatch(updateNewPostTextActionCreator(''));
//    }
//    const updateNewPostTitle = (text) => {
//        dispatch(updateNewPostTitleActionCreator(text));
//    }
//    const updateNewPostText = (text) => {
//        dispatch(updateNewPostTextActionCreator(text));
//    }
//    return (
//        <PostInput
//            newPostTitle={newPostTitle}
//            newPostText={newPostText}
//            className={className}
//            updateNewPostTitle={updateNewPostTitle}
//            updateNewPostText={updateNewPostText}
//            sendPost={sendPost}
//        />
//    )
//}

const mapStateToProps = (state) => {
    return {
        postsData: state.postsReducer,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTitleActionCreator(''));
            dispatch(updateNewPostTextActionCreator(''));
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