import React from "react";
import Button from "../ui/Button";
import {NavLink} from "react-router-dom";
import axios from "axios";

const user = (props) => {
    return (
            <div className={'profile ' + props.className}>
                <div className={'profile__avatar'}>
                    <NavLink to={'/profile/' + props.id}>
                        <img src="/images/avatar.png" alt=""/>
                    </NavLink>
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
                    props.followed ?
                        axios['post'](`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY' : '9e15d9c3-a523-4e71-aeb6-013ec591e7b9'
                                }
                            }).then((res) => {
                                if (res.data.resultCode === 0)  props['followCallback'](props.id)
                        }) :
                        axios['delete'](`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY' : '9e15d9c3-a523-4e71-aeb6-013ec591e7b9'
                            }
                        }).then((res) => {
                            if (res.data.resultCode === 0)  props['unfollowCallback'](props.id)
                        })
                    // !props.followed ? props.followCallback(props.id) : props.unfollowCallback(props.id)
                }} className={'button ' + 'profile__follow'}>
                    <span className={'button__text'}>{props.followed ? 'Unfollow' : 'Follow'}</span>
                </button>
                {/*<button onClick={() => {*/}
                {/*        !props.followed ? props.followCallback(props.id) : props.unfollowCallback(props.id)*/}
                {/*}} className={'button ' + 'profile__follow'}>*/}
                {/*    <span className={'button__text'}>{props.followed ? 'Unfollow' : 'Follow'}</span>*/}
                {/*</button>*/}
            </div>
    )
}

export default user;