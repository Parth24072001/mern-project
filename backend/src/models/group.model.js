import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema(
  {
    group_name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    group_id: {
      type: String,
      required: true,
      lowecase: true,
      trim: true,
    },
    group_member: {
      type: Array,
      required: true,
      trim: true,
      index: true,
    },

    group_createdBy: {
      type: String,
      required: true,
    },

    soft_delete: {
      type: Boolean,
    },
  },
  {
    collection: "group",
    timestamps: true,
  }
);

groupSchema.pre("save", async function (next) {
  next();
});

export const Group = mongoose.model("Group", groupSchema);
