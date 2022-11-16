import React from "react";
import Post from "../components/Post";
import PostInputContainer from "../components/PostInput/PostInputContainer";

const posts = (props) => {
    const postsData = props.data;
    return (
        <div className={'posts'}>
            <h2>My posts</h2>
            <PostInputContainer
                className={'posts__writer'}
                addPost={props.addPost}
                dispatch={props.dispatch}
                newPostTitle={props.newPostTitle}
                newPostText={props.newPostText}/>
            {
                postsData.map((post, index) =>
                    <Post
                        key={index}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        img={post.img}
                    />
                )
            }
        </div>
    )
}

export default posts;