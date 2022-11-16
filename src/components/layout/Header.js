import React from "react";

const header = ({className}) => {
    return (
        <header className={`header ${className}`}>
            <a className="header__logo" href="app/src/components/layout/Header#"><img src="/images/logo.png" alt=""/></a>
        </header>
    )
}

export default header;