import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getAllNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "../controllers/notification.controller.js";

const router = Router();

router
  .route("/read-notification/:_id")
  .patch(verifyJWT, markNotificationAsRead);
router.route("/readall").patch(verifyJWT, markAllNotificationsAsRead);
router.route("/notifications").get(verifyJWT, getAllNotifications);

export default router;
