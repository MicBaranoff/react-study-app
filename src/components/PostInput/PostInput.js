import React from "react";
import Button from "../ui/Button";
const postTitle = React.createRef();
const postText = React.createRef();
const postImg = React.createRef();


class PostInput extends React.Component {
    constructor(props) {
        super(props);
    }
    postBtnHandler() {
        let title = postTitle.current.value;
        let text = postText.current.value;
        if (title && text) this.props.sendPost();
    }
    onChangeTitle = () => {
        let text = postTitle.current.value;
        this.props.updateNewPostTitle(text);
    }
    onChangeText() {
        let text = postText.current.value;
        this.props.updateNewPostText(text);
    }

    render() {
        return (
                <div className={'postInput ' + this.props.className}>
                    <input ref={postTitle} className={'input'}
                        placeholder={'type your title'}
                        value={this.props.postsData.newPostTitle}
                        name=""
                        onChange={this.onChangeTitle.bind(this)}
                        >
                    </input>
                    <textarea ref={postText} className={'textarea input'}
                        value={this.props.postsData.newPostText}
                        placeholder={'type your post'}
                        onChange={this.onChangeText.bind(this)}
                        name="">
                    </textarea>
                    <input ref={postImg} type="file"/>
                    <div className={'postInput__button'}>
                        <Button onClick={this.postBtnHandler.bind(this)} text={'Send'}></Button>
                    </div>
                </div>
           )
    }
}

export default PostInput;