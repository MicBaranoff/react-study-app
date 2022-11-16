import React from "react";

const profile = () => {
    return (
        <div className={'profile'}>
            <div className={'profile__avatar'}>
                <img src="/images/avatar.png" alt=""/>
            </div>
            <div className={'profile__content'}>
                <div className={'profile__name'}>
                    <h3>Name Surname</h3>
                </div>
                <div className={'profile__info'}>
                    <ul>
                        <li>
                            <p>Date of birth: </p>
                        </li>
                        <li>
                            <p>City: </p>
                        </li>
                        <li>
                            <p>Education: </p>
                        </li>
                        <li>
                            <p>Site: </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default profile;