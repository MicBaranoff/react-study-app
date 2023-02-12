import React from "react";
import Profile from "./Profile";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import withAuthRedirectComponent from "../../HOC/AuthRedirect";
import {compose} from "redux";
import withRouter from "../../HOC/withRouter";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile(this.props.router.params.id || this.props.currentUserID);
        this.props.getUserStatus(this.props.router.params.id || this.props.currentUserID);
    }

    render() {
        return <Profile {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    getProfile,
    getUserStatus,
    updateUserStatus,
    isAuth: state.authReducer.isAuth,
    currentUserID: state.authReducer.userID,
})


export default compose(
    connect(mapStateToProps, {
        getProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withAuthRedirectComponent,
    withRouter
)(ProfileContainer);
