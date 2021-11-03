import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "../config/config.js";

const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) res.status(401).json({ error: "User not found." });

        if (!user.authenticate(req.body.password)) {
            return res.status("401").send({
                error: "Email and password don't match.",
            });
        }

        const maxAge = 3 * 60;
        const token = jwt.sign({ _id: user._id }, config.secret, {
            expiresIn: maxAge,
        });

        res.cookie("t", token, {
            /* httpOnly: true, */ maxAge: maxAge * 1000,
        });

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.created,
            },
        });
    } catch (err) {
        res.status(401).json({ error: "Could not login." });
    }
};

const logout = (req, res) => {
    res.clearCookie("t");
    return res.status(200).json({ message: "Logged out." });
};

const requireLogin = expressJwt({
    secret: config.secret,
    userProperty: "auth",
    algorithms: ["HS256"],
});

// Checks if the auth user is the same as the user being updated or deleted.
const hasAuthorization = (req, res, next) => {
    // The req.auth object is populated by expressJwt after authentication.
    // The req.profile is populated by the userByID function.
    const authorized =
        req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
        return res.status("403").json({ error: "User is not authorized" });
    }
    next();
};

export default { login, logout, requireLogin, hasAuthorization };
