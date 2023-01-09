import React from "react";

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className={'post'}>
                    <div className={'post__image'}>
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className={'post__content'}>
                        <div className={'post__title'}>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className={'post__text'}>
                            <p>{this.props.text}</p>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Post;