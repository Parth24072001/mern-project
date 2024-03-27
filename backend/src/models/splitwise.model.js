import mongoose, { Schema } from "mongoose";

const splitwiseSchema = new Schema(
  {
    expence_title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    expence_type: {
      type: String,
      required: true,
      lowecase: true,
      trim: true,
    },
    expence_category: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    expence_money: {
      type: Number,
      required: true,
    },
    expence_createdBy: {
      type: String,
      required: true,
    },

    expence_id: {
      type: Number,
      required: true,
    },

    splitwise_manually: {
      type: Array,
    },

    splitwise: {
      type: String,
      required: true,
    },
    group_id: {
      type: String,
      required: true,
    },
  },
  {
    collection: "splitwise",
    timestamps: true,
  }
);

splitwiseSchema.pre("save", async function (next) {
  next();
});

export const Splitwise = mongoose.model("splitwise", splitwiseSchema);
