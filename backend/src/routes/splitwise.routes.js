import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createSplitWiseExpence,
  getSplitwiseExpenses,
} from "../controllers/splitwise.controller.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";

const router = Router();

//secured routes
router.route("/create-splitwise").post(verifyJWT, createSplitWiseExpence);

router
  .route("/get-splitwise/:group_id/:pageindex/:searchKey?")
  .post(verifyJWT, paginationMiddleware(10), getSplitwiseExpenses);

export default router;
