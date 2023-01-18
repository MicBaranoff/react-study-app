import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {
    setAuthUserData,
} from "../../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true,
        }).then((res) => {
            if (res.data.resultCode === 0) {
                let { id, login, email } = res.data.data;
                this.props.setAuthUserData(id, login, email);
            }
            console.log(res.data );
        })
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
})(HeaderContainer);

export default header ;