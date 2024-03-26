import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createGroup,
  editGroup,
  getArchiveGroup,
  getGroup,
  getOneGroup,
  hardDeleteGroup,
  restoreGroup,
  softDeleteGroup,
} from "../controllers/group.controller.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";

const router = Router();

//secured routes
router.route("/create-group").post(verifyJWT, createGroup);
router.route("/edit-group/:id").patch(verifyJWT, editGroup);
router
  .route("/get-group/:pageindex/:searchKey?")
  .post(verifyJWT, paginationMiddleware(10), getGroup);

router.route("/archive-group/:id").post(verifyJWT, softDeleteGroup);

router.route("/restore-group/:id").post(verifyJWT, restoreGroup);

router.route("/delete-group/:id").delete(verifyJWT, hardDeleteGroup);
router.route("/get-group-by-id/:id").get(verifyJWT, getOneGroup);

router
  .route("/get-archive-group/:pageindex")
  .post(verifyJWT, paginationMiddleware(10), getArchiveGroup);

export default router;
