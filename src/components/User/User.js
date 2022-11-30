import React from "react";
import Button from "../ui/Button";

const user = (props) => {
    console.log(props.id);
    return (
            <div className={'profile ' + props.className}>
                <div className={'profile__avatar'}>
                    <img src="/images/avatar.png" alt=""/>
                </div>
                <div className={'profile__content'}>
                    <div className={'profile__name'}>
                        <h3>{ props.name }</h3>
                    </div>
                    <div className={'profile__info'}>
                        <ul>
                            <li>
                                <p>Date of birth: { props.date }</p>
                            </li>
                            <li>
                                <p>City:  { props.city }</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => {
                        !props.followed ? props.followCallback(props.id) : props.unfollowCallback(props.id)
                }} className={'button ' + 'profile__follow'}>
                    <span className={'button__text'}>{props.followed ? 'Unfollow' : 'Follow'}</span>
                </button>
            </div>
    )
}

export default user;