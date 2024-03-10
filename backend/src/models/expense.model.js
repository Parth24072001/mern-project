import mongoose, { Schema } from "mongoose";

const expenceSchema = new Schema(
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
  },
  {
    collection: "expences",
    timestamps: true,
  }
);

export const Expence = mongoose.model("Expence", expenceSchema);
