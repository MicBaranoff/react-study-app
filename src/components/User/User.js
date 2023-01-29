import React from "react";
import Button from "../ui/Button";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../Api/api";

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
                    console.log(props.id);
                    props.toggleFollowingProgress(props.id, true);
                    !props.followed ?
                        usersApi.setFollowStatus('post', props.id).then((res) => {
                                if (res.data.resultCode === 0) {
                                    props.toggleFollowingProgress(props.id, false);
                                    props['followCallback'](props.id)
                                }
                        }) :
                        usersApi.setFollowStatus('delete', props.id).then((res) => {
                            if (res.data.resultCode === 0) {
                                props.toggleFollowingProgress(props.id, false);
                                props['unfollowCallback'](props.id)
                            }
                        })
                    // !props.followed ? props.followCallback(props.id) : props.unfollowCallback(props.id)
                }} className={'button ' + 'profile__follow'}>
                    <span className={'button__text'}>{
                        props.followInProgress.some(item => item === props.id) ?
                            'loading...' :
                            (props.followed ? 'Unfollow' : 'Follow')
                    }</span>
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
