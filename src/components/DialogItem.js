import React from "react";
import {NavLink} from "react-router-dom";

const dialogItem = (props) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className="discussion">
            <div className="photo">
                <img src={props.avatar} alt=""/>
                <div className="online"></div>
            </div>
            <div className="desc-contact">
                <p className="name">{props.name}</p>
                <p className="message">9 pm at the bar if possible 😳</p>
            </div>
            <div className="timer">12 sec</div>
            <NavLink className={({ isActive }) => (isActive ? "active" : "") + " discussion__link"} to={path}></NavLink>
        </div>
    )
}

export default dialogItem;