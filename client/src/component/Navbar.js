import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import FaceIcon from "@mui/icons-material/Face";
import MessageIcon from "@mui/icons-material/Message";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <span className="logo">Simple-SM-app</span>
                    <span className="homeIcon">
                        <HomeIcon />
                    </span>
                </div>
                <div className="navbarRight">
                    <div className="iconsContainer">
                        <CircleNotificationsIcon />
                        <MessageIcon />
                        <FaceIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
