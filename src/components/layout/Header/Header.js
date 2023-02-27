import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogoutClickHandler() {
        this.props.logoutProfile()
    }

    render() {
        return  (
            <header className={`header ${this.props.className}`}>
                <NavLink className="header__logo" to="/">
                    <img src="/images/logo.png" alt=""/>
                </NavLink>
                <div className={'header__login'}>
                    <p>{this.props.email}</p>
                    {
                        !this.props.isAuth ?
                            <NavLink to={'/login'}>Login</NavLink> :
                            <button onClick={() => this.onLogoutClickHandler()}>Logout</button>
                    }
                </div>
            </header>
        )
    }
}

export default Header ;