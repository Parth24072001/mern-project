import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Expence } from "../models/expense.model.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createExpence = asyncHandler(async (req, res) => {
  const {
    expence_title,
    expence_type,
    expence_category,
    expence_money,
    expence_createdBy,
  } = req.body;

  if (
    [expence_title, expence_type, expence_category, expence_createdBy].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ expence_createdBy }],
  });

  if (existedUser) {
    throw new ApiError(409, "User Invalid");
  }

  const expence = await Expence.create({
    expence_title,
    expence_type,
    expence_category,
    expence_money,
    expence_createdBy,
  });

  if (!expence) {
    throw new ApiError(500, "Something went wrong while creating a expence");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, expence, "Expence created Successfully"));
});
const getExpence = asyncHandler(async (req, res) => {
  const pageNumber = req.query.page || 1; // Get the current page number from the query parameters
  const startIndex = (pageNumber - 1) * 10;
  const endIndex = startIndex + 10;
  const { expenseId } = req.params;

  const expences = await Expence.find({ expence_createdBy: expenseId });

  if (!expences || expences.length === 0) {
    throw new ApiError(404, "No expenses found for the given user ID");
  }

  return res.status(200).json({
    status: 200,
    data: {
      expences: expences
        .map((expence) => expence.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        expences.map((expence) => expence.toObject()).length / 10
      ),
    },
    message: "Expenses fetched successfully",
  });
});

export { createExpence, getExpence };
