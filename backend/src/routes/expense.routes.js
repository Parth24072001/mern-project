import { Router } from "express";
import {
  createExpence,
  deleteExpense,
  getExpence,
} from "../controllers/expense.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";

const router = Router();

//secured routes
router.route("/create-expence").post(verifyJWT, createExpence);
router
  .route("/get-expence/:pageindex")
  .post(verifyJWT, paginationMiddleware(10), getExpence);

router.route("/delete-expence/:id").delete(verifyJWT, deleteExpense);

export default router;
