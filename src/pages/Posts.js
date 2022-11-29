import React from "react";
import PostsListContainer from "../components/Posts/PostsListContainer";
import PostInputContainer from "../components/PostInput/PostInputContainer";
//addPost={props.addPost}
//dispatch={props.dispatch}
//newPostTitle={props.newPostTitle}
//newPostText={props.newPostText}
const posts = () => {
    return (
        <div className={'posts'}>
            <h2>My posts</h2>
            <PostInputContainer
                className={'posts__writer'}
            />
            <PostsListContainer />
        </div>
    )
}

export default posts;