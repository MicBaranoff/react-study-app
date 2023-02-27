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
import {
    getCurrentPage,
    getFollowInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/user-selector";

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followInProgress: getFollowInProgress(state),
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