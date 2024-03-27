import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    message_for: {
      type: String,
      required: true,
      lowecase: true,
      trim: true,
    },
    message_by: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    read: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: "notification",
    timestamps: true,
  }
);

notificationSchema.pre("save", async function (next) {
  next();
});

export const Notification = mongoose.model("Notification", notificationSchema);
