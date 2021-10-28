import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./express.js";

const { connect, connection } = mongoose;

connect(config.mongoUri);

connection.on("connected", () => console.log("DB Connection established!"));

app.listen(config.port, () =>
    console.log("Server running at %s.", config.port)
);
