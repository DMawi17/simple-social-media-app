import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const { connect, connection } = mongoose;

const app = express();
dotenv.config();

connect(process.env.MONGO_URI);

connection.on("connected", () => console.log("DB Connection established!"));

const port = 3000;
app.listen(port, () => console.log("Server running at %s.", port));
