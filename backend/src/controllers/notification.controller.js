import { Notification } from "../models/notification.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const markNotificationAsRead = async (req, res) => {
  const { _id } = req.params;

  try {
    const notification = await Notification.findById(_id);

    if (!notification) {
      throw new ApiError(404, "Notification not found");
    }

    // Update the read field to true
    notification.read = true;

    await notification.save();

    return res
      .status(200)
      .json(new ApiResponse(200, notification, "Notification marked as read"));
  } catch (error) {
    console.error(error);

    throw new ApiError(500, "Internal server error");
  }
};

export const markAllNotificationsAsRead = async (req, res) => {
  const userId = req.user.id; // Assuming you have user information in req.user

  try {
    // Find the user based on the provided user ID
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Find all notifications for the user
    const notifications = await Notification.find({ message_for: user.email });

    if (!notifications.length) {
      throw new ApiError(404, "No notifications found for the current user");
    }

    // Update the read field to true for all notifications
    for (const notification of notifications) {
      notification.read = true;
      await notification.save();
    }

    return res
      .status(200)
      .json(new ApiResponse(200, "All notifications marked as read"));
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getAllNotifications = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const notifications = await Notification.find({
      message_for: user.email,
    }).sort({ createdAt: -1 });

    const allRead = notifications.every((notification) => notification.read);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { notifications, allRead },
          "notification fetched succesfully"
        )
      );
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    } else {
      throw new ApiError(500, "Internal server error");
    }
  }
};
