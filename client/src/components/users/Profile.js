import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import { read } from "./user-api";
import auth from "../auth/auth-helper";

export default function Profile({ match }) {
    const [user, setUser] = useState({});
    const jwt = auth.isAuthenticated();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        read(
            {
                userId: match.params.userId,
            },
            { t: jwt.token },
            signal
        ).then((data) => {
            if (data && data.error) {
                alert(data.error);
            } else {
                setUser(data);
            }
        });

        return function cleanup() {
            abortController.abort();
        };
    }, [jwt.token, match.params.userId]);

    return (
        <div className="profile">
            <h2 className="profileTitle">Profile</h2>
            <div className="profileInner">
                <List sx={{ width: "100%", maxWidth: 360 }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.name}
                            secondary={user.email}
                        />
                        <Link to={"/user/edit/" + user._id}>
                            <IconButton>
                                <Edit />
                            </IconButton>
                        </Link>
                        <DeleteUser />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}
