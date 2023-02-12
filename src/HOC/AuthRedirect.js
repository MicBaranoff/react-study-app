import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
})

let AuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            if (!this.props.isAuth) return  <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default AuthRedirectComponent;