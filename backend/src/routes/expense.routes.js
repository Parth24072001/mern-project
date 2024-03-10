import { Router } from "express";
import { createExpence } from "../controllers/expense.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//secured routes
router.route("/create-expence").post(verifyJWT, createExpence);

export default router;
