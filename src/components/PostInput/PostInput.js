import React from "react";
import Button from "../ui/Button";
const postTitle = React.createRef();
const postText = React.createRef();
const postImg = React.createRef();

const postInput = (props) => {
    const postsData = props.postsData;
    const postBtnHandler = () => {
        let title = postTitle.current.value;
        let text = postText.current.value;
        if (title && text) props.sendPost();
    }
    const onChangeTitle = () => {
        let text = postTitle.current.value;
        props.updateNewPostTitle(text);
    }
    const onChangeText = () => {
        let text = postText.current.value;
        props.updateNewPostText(text);
    }
    return (
            <div className={'postInput ' + props.className}>
            <input ref={postTitle} className={'input'}
                   placeholder={'type your title'}
                value={postsData.newPostTitle}
                   name=""
                   onChange={onChangeTitle}
            >
            </input>
            <textarea ref={postText} className={'textarea input'}
                value={postsData.newPostText}
                      placeholder={'type your post'}
                      onChange={onChangeText}
                      name="">
            </textarea>
            <input ref={postImg} type="file"/>
            <div className={'postInput__button'}>
                <Button onClick={postBtnHandler} text={'Send'}></Button>
            </div>
        </div>
    )
}

export default postInput;