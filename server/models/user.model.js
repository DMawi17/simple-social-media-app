import mongoose from "mongoose";

const { Schema, model } = mongoose;
const userSchema = new Schema(
    {
        name: { type: String, required: true, minLength: 5 },
        email: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 400,
            index: { unique: true },
            validate: [],
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 200,
        },
    },
    { timeStamp: true }
);

export default model("User", userSchema);
