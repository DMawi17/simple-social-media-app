import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <Link to="/" className="link">
                        <span className="logo">sSMa</span>
                    </Link>
                    <Link to="/" className="link">
                        <div>
                            <HomeIcon className="homeIcon" />
                        </div>
                    </Link>
                    <Link to="/auth/sign_up" className="link">
                        <span className="auth">Sign Up</span>
                    </Link>
                    <Link to="/auth/sign_in" className="link">
                        <span className="auth">Sign In</span>
                    </Link>
                    <Link to="/users" className="link">
                        <span className="users">Users</span>
                    </Link>
                </div>
                <div className="navbarRight">
                    <div className="iconsContainer">
                        <SettingsIcon />
                    </div>
                    <div className="iconsContainer">
                        <CircleNotificationsIcon />
                        <span className="topIconBag">5</span>
                    </div>
                    <div className="iconsContainer">
                        <MessageIcon />
                        <span className="topIconBag">2</span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="avatar"
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;
