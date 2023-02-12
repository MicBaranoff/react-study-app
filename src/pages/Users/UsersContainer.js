import React from "react";
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading,
    toggleFollowingProgress,
    getUsersThunkCreator,
    setUserFollowStatusThunkCreator,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import withAuthRedirectComponent from "../../HOC/AuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleLoading(true);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page.selected);
        this.props.setUsers([]);
        this.props.toggleLoading(true);
        this.props.getUsers(page.selected, this.props.pageSize);
        // this.getUsers(page.selected, this.props.pageSize);
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
                        setUserFollowStatus={this.props.setUserFollowStatus}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followInProgress={this.props.followInProgress}
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
        followInProgress: state.usersReducer.followInProgress,
    };
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        followUser,
        unfollowUser,
        setCurrentPage,
        setTotalUsersCount,
        toggleLoading,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
        setUserFollowStatus: setUserFollowStatusThunkCreator,
    }),
    withAuthRedirectComponent,
)(UsersContainer);