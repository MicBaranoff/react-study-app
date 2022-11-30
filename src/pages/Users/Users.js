import React from "react";
import User from "../../components/User/User";
import Button from "../../components/ui/Button";
//addPost={props.addPost}
//dispatch={props.dispatch}
//newPostTitle={props.newPostTitle}
//newPostText={props.newPostText}
const users = (props) => {
    console.log(props);
    return (
            <div className={'users'}>
                <h2>Users</h2>
                {
                    props.users.map(user => {
                        if (user) {
                            return <User
                                key={user.id}
                                id={user.id}
                                followCallback={props.followUser}
                                unfollowCallback={props.unfollowUser}
                                followed={user.followed}
                                className={'users__item'}
                                name={user.name}
                                date={user.date}
                                city={user.city} />
                        }
                    })
                }
                <div className={'users__button'}>
                    <Button text={'Show more'}></Button>
                </div>
            </div>
            )
}

export default users;