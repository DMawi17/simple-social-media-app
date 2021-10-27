import express from "express";
import mongoose from "mongoose";

const { Schema, model, connect, connection } = mongoose;

const app = express();



const port = 3000;
app.listen(port, () => console.log("Server running at %s.", port));
