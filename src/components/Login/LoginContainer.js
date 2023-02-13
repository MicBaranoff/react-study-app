import React from "react";
import Login from "./Login";
import {loginToProfile} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Login {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
    loginToProfile,
    isAuth: state.authReducer.isAuth,
})


export default compose(
    connect(mapStateToProps, {
        loginToProfile,
    }),
)(LoginContainer);
