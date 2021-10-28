import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    secret: process.env.JWT_SECRET,
};

export default config;
