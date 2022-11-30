import React from "react";

const button = ({text, onClick, className}) => {
    return (
            <button onClick={onClick} className={'button ' + className}>
            <span className={'button__text'}>{text}</span>
        </button>
    )
}

export default button;