import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateUserStatus} from "../../redux/profile-reducer";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.profile;
        return data ? (
            <div className={'profile'}>
                <div className={'profile__avatar'}>
                    <img src={data.photos?.small} alt=""/>
                </div>
                <div className={'profile__content'}>
                    <div className={'profile__name'}>
                        <h3>{ data.fullName }</h3>
                    </div>
                    <ProfileStatus
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatus}
                    />
                    <div className={'profile__info'}>
                        <ul>
                            <li>
                                <p>Обо мне: { data.aboutMe }</p>
                            </li>
                            <li>
                                <p>В поиске работы: { data.lookingForAJob ? 'Да' : 'Нет' }</p>
                            </li>
                            <li>
                                <p>Статус: { data.lookingForAJobDescription } </p>
                            </li>
                            <li>
                                <p>Site: { data.contacts?.facebook }</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ) : (<img src={'/images/loader.svg'}  alt={''}/>)
    }
}

export default Profile;