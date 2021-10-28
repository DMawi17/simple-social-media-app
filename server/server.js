import express from "express";
import mongoose from "mongoose";
import config from "../config/config.js";

const { connect, connection } = mongoose;

const app = express();

connect(config.mongoUri);

connection.on("connected", () => console.log("DB Connection established!"));

app.listen(config.port, () =>
    console.log("Server running at %s.", config.port)
);
