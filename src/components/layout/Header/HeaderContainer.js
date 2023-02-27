import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {
    logoutProfile,
    setAuthUserData,
} from "../../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userID: state.authReducer.userID,
        email: state.authReducer.email,
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth,
        logoutProfile,
    };
}

const header = connect(mapStateToProps, {
    setAuthUserData,
    logoutProfile,
})(HeaderContainer);

export default header ;