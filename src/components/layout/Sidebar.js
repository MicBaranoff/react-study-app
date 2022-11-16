import React from "react";
import {NavLink} from "react-router-dom";

const sidebar = ({className}) => {
    return (
        <div className={`sidebar ${className}` }>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "") + " sidebar__link"} to="/">Home</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "") + " sidebar__link"} to="/dialogs">Dialogs</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "") + " sidebar__link"} to="/profile">Profile</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "") + " sidebar__link"} to="/posts">Posts</NavLink>
                    </li>
                    <li className="sidebar__list-item">
                        <NavLink className={({ isActive }) => (isActive ? "active" : "") + " sidebar__link"} to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
        </div>
    )
}

export default sidebar;