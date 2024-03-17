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
    expence_id: {
      type: Number,
      required: true,
    },
    soft_delete: {
      type: Boolean,
    },
  },
  {
    collection: "expences",
    timestamps: true,
  }
);

expenceSchema.pre("save", async function (next) {
  next();
});

export const Expence = mongoose.model("Expence", expenceSchema);
