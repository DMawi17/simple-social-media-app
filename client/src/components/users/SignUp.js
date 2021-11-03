import { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { create } from "./user-api.js";

export default function SingUp() {
    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
    });

    const handleChange = (valueName) => (e) => {
        setValues({ ...values, [valueName]: e.target.value });
    };

    const clickSubmit = () => {
        const user = {
            name: values.name,
            email: values.email,
            password: values.password,
        };
        return create(user);
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
            <div className="signUp">
                <h2 className="signUpTitle">Sign Up</h2>
                <div className="signUpInner">
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

                    <Link to="/auth/sign_in" className="buttonLink">
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
