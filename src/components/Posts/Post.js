import React from "react";

const post = ({title, text, img}) => {
    return (
        <div className={'post'}>
            <div className={'post__image'}>
                <img src={img} alt=""/>
            </div>
            <div className={'post__content'}>
                <div className={'post__title'}>
                    <h3>{title}</h3>
                </div>
                <div className={'post__text'}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default post;