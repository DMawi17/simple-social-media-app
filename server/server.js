import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config/config.js";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

mongoose.connect(config.mongoUri).then(() => console.log("Connected to DB"));

app.use("/", userRoutes);
app.use("/", authRoutes);

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).send({ error: "User in not authorized" });
    } else if (err) {
        res.status(400).json({ error: err.message });
        console.log(err);
    }
});

app.listen(config.port, () => {
    console.log(`Server started on ${config.port}`);
});
