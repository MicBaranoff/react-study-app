import React from "react";

const message = (props) => {
    let avatar = null;
    if (props.image) {
        avatar =
            <div className="photo">
                <img src={props.image} alt=""/>
                <div className="online"></div>
            </div>
    }
    return (
        <div className="message">
            <div className={`message__wrapper ${props.self ? 'message--self' : ''}`}>
                {avatar}
                <p className="text"> {props.text} </p>
            </div>
        </div>
    )
}

export default message;