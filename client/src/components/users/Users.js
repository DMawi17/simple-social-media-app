import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { list } from "./user-api";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error);
            } else {
                setUsers(data);
            }
        });

        return function cleanup() {
            abortController.abort();
        };
    }, []);

    return (
        <div className="usersPage">
            <h2>User List</h2>
            <div className="usersInner">
                <List sx={{ width: "100%", maxWidth: 360 }}>
                    {users.map((user, i) => {
                        return (
                            <Link to={"/user/" + user._id} key={user._id}>
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
                                    <IconButton>
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </ListItem>
                            </Link>
                        );
                    })}
                </List>
            </div>
        </div>
    );
}
