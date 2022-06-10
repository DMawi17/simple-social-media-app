import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import { read, update } from "./user-api";

export default function EditProfile({ match }) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

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
                setValues({ ...values, name: data.name, email: data.email });
            }
        });
        return function cleanup() {
            abortController.abort();
        };
    }, [jwt.token, match.params.userId, values]);

    const clickSubmit = () => {
        const user = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        update(
            {
                userId: match.params.userId,
            },
            {
                t: jwt.token,
            },
            user
        ).then((data) => {
            if (data && data.error) {
                alert(data.error);
            } else {
                setValues({
                    ...values,
                    userId: data._id,
                });
            }
        });
    };

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="edit">
                <h2 className="editTitle">Edit Profile</h2>
                <div className="editInner">
                    <FormControl className="inputFrame">
                        <InputLabel htmlFor="component-outlined">
                            Name
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={values.name}
                            onChange={handleChange("name")}
                            label="Name"
                            size="small"
                        />
                    </FormControl>
                    <FormControl className="inputFrame">
                        <InputLabel htmlFor="component-outlined">
                            Email
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={values.email}
                            onChange={handleChange("email")}
                            label="Email"
                            size="small"
                        />
                    </FormControl>
                    <FormControl className="inputFrame">
                        <InputLabel htmlFor="component-outlined">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={values.password}
                            onChange={handleChange("password")}
                            label="Password"
                            size="small"
                        />
                    </FormControl>
                    <Link to="/user/profile" className="buttonLink">
                        <Button
                            variant="contained"
                            onClick={clickSubmit}
                            id="button"
                        >
                            submit
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>
    );
}
