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

    onPageChanged(page) {
        this.props.setCurrentPage(page);
        this.props.setUsers([]);
        this.getUsers();
    }

    getUsers() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let  i = 1; i<= pagesCount; i++) {
            pages.push(i);
        }
        return (
                <div className={'users'}>
                    <h2>Users</h2>
                    <div>
                        {
                            pages.map(p => {
                               return <button
                                   onClick={() => { this.onPageChanged(p) }}
                                   className={this.props.currentPage === p ? 'users__nav-item--active' : undefined} key={p}>
                                   {p}
                               </button>
                            })
                        }
                    </div>
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