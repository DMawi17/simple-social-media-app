import { Router } from "express";
import { create, list } from "../controllers/user.controller.js";

const router = Router();

router.route("/users").post(create).get(list);

export default router;
