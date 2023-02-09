import React from "react";
import Button from "../ui/Button";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../Api/api";
class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'profile ' + this.props.className}>
                <div className={'profile__avatar'}>
                    <NavLink to={'/profile/' + this.props.id}>
                        <img src="/images/avatar.png" alt=""/>
                    </NavLink>
                </div>
                <div className={'profile__content'}>
                    <div className={'profile__name'}>
                        <h3>{ this.props.name }</h3>
                    </div>
                    <div className={'profile__info'}>
                        <ul>
                            <li>
                                <p>Date of birth: { this.props.date }</p>
                            </li>
                            <li>
                                <p>City:  { this.props.city }</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => {
                    this.props.toggleFollowingProgress(this.props.id, true);
                    !this.props.followed ?
                        this.props.setUserFollowStatus('post', this.props.id) :
                        this.props.setUserFollowStatus('delete', this.props.id)
                }} className={'button ' + 'profile__follow'}>
                    <span className={'button__text'}>{
                        this.props.followInProgress.some(item => item === this.props.id) ?
                            'loading...' :
                            (this.props.followed ? 'Unfollow' : 'Follow')
                    }</span>
                </button>
            </div>
        )
    }
}

export default User;
