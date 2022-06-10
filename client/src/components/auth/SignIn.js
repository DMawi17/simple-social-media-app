import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { login } from "./auth-api";
import auth from "../auth/auth-helper";

export default function SingIn() {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
    });

    const clickSubmit = () => {
        const user = {
            email: values.email,
            password: values.password,
        };

        login(user).then((data) => {
            if (data.error) {
                alert(data.error);
                setValues({ ...values, error: data.error });
            } else {
                auth.authenticate(data);
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
            <div className="signIn">
                <h2>Sign In</h2>
                <div className="signInInner">
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
                    <Link to="/users" className="buttonLink">
                        <Button
                            variant="contained"
                            onClick={clickSubmit}
                            className="button"
                        >
                            submit
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>
    );
}
