import React from "react";

const button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={'button'}>
            <span className={'button__text'}>{text}</span>
        </button>
    )
}

export default button;