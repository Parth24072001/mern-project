import { Router } from "express";
import {
  createExpence,
  editExpence,
  getArchiveExpence,
  getExpence,
  getOneExpence,
  hardDeleteExpense,
  restoreExpense,
  softDeleteExpense,
} from "../controllers/expense.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";

const router = Router();

//secured routes
router.route("/create-expence").post(verifyJWT, createExpence);
router
  .route("/get-expence/:pageindex/:searchKey?")
  .post(verifyJWT, paginationMiddleware(10), getExpence);

router.route("/archive-expence/:id").post(verifyJWT, softDeleteExpense);
router.route("/restore-expence/:id").post(verifyJWT, restoreExpense);

router.route("/delete-expence/:id").delete(verifyJWT, hardDeleteExpense);
router.route("/get-expence-by-id/:id").get(verifyJWT, getOneExpence);
router.route("/edit-expence/:id").patch(verifyJWT, editExpence);

router
  .route("/get-archive-expence/:pageindex")
  .post(verifyJWT, paginationMiddleware(10), getArchiveExpence);

export default router;
