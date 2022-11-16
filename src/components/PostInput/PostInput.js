import React from "react";
import Button from "../ui/Button";
const postTitle = React.createRef();
const postText = React.createRef();
const postImg = React.createRef();

const postInput = ({className, newPostText, newPostTitle, sendPost, updateNewPostTitle, updateNewPostText}) => {
    const postBtnHandler = () => {
        let title = postTitle.current.value;
        let text = postText.current.value;
        if (title && text) sendPost();
    }
    const onChangeTitle = () => {
        let text = postTitle.current.value;
        updateNewPostTitle(text);
    }
    const onChangeText = () => {
        let text = postText.current.value;
        updateNewPostText(text);
    }
    return (
        <div className={'postInput ' + className}>
            <input ref={postTitle} className={'input'}
                   placeholder={'type your title'}
                   value={newPostTitle}
                   name=""
                   onChange={onChangeTitle}
            >
            </input>
            <textarea ref={postText} className={'textarea input'}
                      value={newPostText}
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