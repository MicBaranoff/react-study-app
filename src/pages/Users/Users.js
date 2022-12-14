import React from "react";
import User from "../../components/User/User";
import Button from "../../components/ui/Button";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            this.props.setUsers(res.data.items);
        })
    }

    render() {
        return (
                <div className={'users'}>
                    <h2>Users</h2>
                    {
                        this.props.users.map((user, index) => {
                            if (user) {
                                return <User
                                    key={user.id + index * Math.random()}
                                    id={user.id}
                                    followCallback={this.props.followUser}
                                    unfollowCallback={this.props.unfollowUser}
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
}

export default Users;