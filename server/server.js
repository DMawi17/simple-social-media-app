import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import userRoute from "./routes/user.route.js";

const { connect, connection } = mongoose;

const app = express();

app.use(express.json());

connect(config.mongoUri);
connection.on("connected", () => console.log("DB Connection established!"));

app.use((req, res, next) => {
    console.info(`${req.method} request @ ${req.path}`);
    next();
});

app.use("/", userRoute);

app.listen(config.port, () =>
    console.log("Server running at %s.", config.port)
);
