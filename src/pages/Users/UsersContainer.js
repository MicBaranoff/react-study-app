import React from "react";
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleLoading(true);
        setTimeout(() => {
            this.getUsers();
        }, 2000)
    }

    onPageChanged = (page) => {
        console.log(page);
        this.props.setCurrentPage(page.selected);
        this.props.setUsers([]);
        this.getUsers();
    }

    getUsers() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
            this.props.toggleLoading(false);
        })
    }

    render() {
        return <>
            {
                this.props.isLoading ?
                    <img src={'/images/loader.svg'}  alt={''}/> :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        users={this.props.users}
                    />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize ,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isLoading: state.usersReducer.isLoading,
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         followUser: (userID) => {
//             dispatch(followUser(userID));
//         },
//         unfollowUser: (userID) => {
//             dispatch(unfollowUser(userID));
//         },
//         setCurrentPage: (value) => {
//             dispatch(setCurrentPage(value));
//         },
//         setTotalUsersCount: (value) => {
//             dispatch(setTotalUsersCount(value));
//         },
//         toggleLoading: (value) => {
//             dispatch(toggleLoading(value));
//         },
//     };
// }

const users = connect(mapStateToProps, {
    setUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading,
})(UsersContainer);

export default users;