import React from "react";
import Users from "./Users";
import {
    followUserActionCreator,
    unfollowUserActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize ,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        followUser: (userID) => {
            dispatch(followUserActionCreator(userID));
        },
        unfollowUser: (userID) => {
            dispatch(unfollowUserActionCreator(userID));
        },
        setCurrentPage: (value) => {
            dispatch(setCurrentPageActionCreator(value));
        },
        setTotalUsersCount: (value) => {
            dispatch(setTotalUsersCountActionCreator(value));
        },
    };
}

const users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default users;