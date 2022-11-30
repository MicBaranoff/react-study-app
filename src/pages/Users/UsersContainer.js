import React from "react";
import Users from "./Users";
import {followUserActionCreator,unfollowUserActionCreator,setUsersActionCreator} from "../../redux/users-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
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
        }
    };
}

const users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default users;