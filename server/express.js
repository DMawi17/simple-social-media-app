import express from "express";
import userRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.info(`${req.method} request @ ${req.path}`);
    next();
});
app.use("/", userRoute);

export default app;
