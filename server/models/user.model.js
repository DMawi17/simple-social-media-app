import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema, model } = mongoose;
const { genSalt, hash, compare } = bcrypt;
const { isEmail } = validator;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        maxLength: 255,
        minlength: 6,
        index: { unique: true },
        validate: [isEmail, "Enter a valid email."],
    },
    password: {
        type: String,
        required: true,
        maxLength: 1024,
        minlength: 6,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: Date,
});

UserSchema.pre("save", async function (next) {
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

UserSchema.methods.authenticate = async function (plainText) {
    return compare(plainText, this.password);
};

export default model("User", UserSchema);
