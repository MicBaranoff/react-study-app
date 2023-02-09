import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {
    getAuthStatus,
    setAuthUserData,
} from "../../../redux/auth-reducer";
import {authApi} from "../../../Api/api";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAuthStatus();
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
    };
}

const header = connect(mapStateToProps, {
    setAuthUserData,
    getAuthStatus,
})(HeaderContainer);

export default header ;