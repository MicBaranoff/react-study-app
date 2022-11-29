import React from "react";
import Post from "./Post";

const PostsList = (props) => {
    return (
            props.postsData.posts.map(post =>
            <Post
                key={`post${Math.random()+post.id}`}
                id={post.id}
                title={post.title}
                text={post.text}
                img={post.img}
            />
        )
    )
}

export default PostsList;