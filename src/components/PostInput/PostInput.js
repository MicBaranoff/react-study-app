import React from "react";
import Button from "../ui/Button";
import {Field, reduxForm} from "redux-form";
const postTitle = React.createRef();
const postText = React.createRef();
const postImg = React.createRef();


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field ref={postTitle} className={'input'}
                   component={'input'}
                   placeholder={'type your title'}
                   name="postTitle"
            >
            </Field>
            <Field ref={postText} className={'textarea input'}
                   component={'textarea'}
                      placeholder={'type your post'}
                      name="postText">
                </Field>
            <input ref={postImg} type="file"/>
            <div className={'postInput__button'}>
                <Button text={'Send'}></Button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm)

class PostInput extends React.Component {
    constructor(props) {
        super(props);
    }
    postBtnHandler(formData) {
        let title = formData.postTitle;
        let text = formData.postText;
        if (title && text) this.props.sendPost({
            title, text
        });
    }

    render() {
        return (
                <div className={'postInput ' + this.props.className}>
                    <ReduxPostForm onSubmit={this.postBtnHandler.bind(this)}/>
                </div>
           )
    }
}

export default PostInput;