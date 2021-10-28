import User from "../models/user.model.js";

const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(200).json({ message: "Successfully Signed up" });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

const list = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export { create, list };
