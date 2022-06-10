import express from "express";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/auth/login", authCtrl.login);
router.get("/auth/logout", authCtrl.logout);

export default router;
