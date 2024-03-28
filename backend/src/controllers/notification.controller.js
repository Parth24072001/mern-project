import { Notification } from "../models/notification.model.js";
import { User } from "../models/user.model.js";

export const markNotificationAsRead = async (req, res) => {
  const { _id } = req.params;

  try {
    const notification = await Notification.findById(_id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    // Update the read field to true
    notification.read = true;

    await notification.save();

    res
      .status(200)
      .json({ message: "Notification marked as read", notification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const markAllNotificationsAsRead = async (req, res) => {
  const userId = req.user.id; // Assuming you have user information in req.user

  try {
    // Find the user based on the provided user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all notifications for the user
    const notifications = await Notification.find({ message_for: user.email });

    if (!notifications.length) {
      return res
        .status(404)
        .json({ message: "No notifications found for the current user" });
    }

    // Update the read field to true for all notifications
    notifications.forEach(async (notification) => {
      notification.read = true;
      await notification.save();
    });

    res.status(200).json({ message: "All notifications marked as read" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllNotifications = async (req, res) => {
  const userId = req.user.id; // Assuming you have user information in req.user

  try {
    // Find the user based on the provided user ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find all notifications for the user
    const notifications = await Notification.find({
      message_for: user.email,
    }).sort({ createdAt: -1 });

    const allRead = notifications.every((notification) => notification.read);
    const currentUserData = req.user.toObject();
    if (!notifications.length) {
      return res.status(200).json({ notifications, allRead, currentUserData });
    }

    res.status(200).json({ notifications, allRead, currentUserData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
