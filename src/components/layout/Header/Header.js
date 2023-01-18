import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (
            <header className={`header ${this.props.className}`}>
                <NavLink className="header__logo" to="/">
                    <img src="/images/logo.png" alt=""/>
                </NavLink>
                <div className={'header__login'}>
                    {
                        !this.props.isAuth ?
                            <NavLink to={'/login'}>Login</NavLink> :
                            <NavLink to={'/login'}>Logout</NavLink>
                    }
                </div>
            </header>
        )
    }
}

export default Header ;