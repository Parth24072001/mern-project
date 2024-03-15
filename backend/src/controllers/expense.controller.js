import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Expence } from "../models/expense.model.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import mongoose from "mongoose";

const createExpence = asyncHandler(async (req, res) => {
  const { expence_title, expence_type, expence_category, expence_money } =
    req.body;
  const expence_createdBy = req.user._id;
  if (
    [expence_title, expence_type, expence_category].some(
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
    hard_delete: false,
    soft_delete: false,
  });

  if (!expence) {
    throw new ApiError(500, "Something went wrong while creating a expence");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, expence, "Expence created Successfully"));
});

const getExpence = asyncHandler(async (req, res) => {
  const pageNumber = req.params.pageindex || 1;
  const startIndex = (pageNumber - 1) * 10;
  const endIndex = startIndex + 10;
  const expenseId = req.user?._id;

  const expences = await Expence.find({ expence_createdBy: expenseId });

  // if (!expences || expences.length === 0) {
  //   throw new ApiError(404, "No expenses found for the given user ID");
  // }

  return res.status(200).json({
    status: 200,
    data: {
      expences: expences
        .filter((expence) => expence.soft_delete === false)
        .map((expence) => expence.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        expences.filter((expence) => expence.soft_delete === false).length / 10
      ),
    },
    message: "Expenses fetched successfully",
  });
});

const getArchiveExpence = asyncHandler(async (req, res) => {
  const pageNumber = req.params.pageindex || 1;
  const startIndex = (pageNumber - 1) * 10;
  const endIndex = startIndex + 10;
  const expenseId = req.user?._id;

  const expences = await Expence.find({ expence_createdBy: expenseId });

  // if (!expences || expences.length === 0) {
  //   throw new ApiError(404, "No expenses found for the given user ID");
  // }

  return res.status(200).json({
    status: 200,
    data: {
      expences: expences
        .filter((expence) => expence.soft_delete === true)
        .map((expence) => expence.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        expences.filter((expence) => expence.soft_delete === true).length / 10
      ),
    },
    message: "Expenses fetched successfully",
  });
});

const softDeleteExpense = asyncHandler(async (req, res) => {
  const expenseId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(expenseId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid expense ID"));
  }

  let expense = await Expence.findById(expenseId);

  if (!expense) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Expense not found"));
  }

  // Modify the field value here
  expense.soft_delete = true; // Change this line to modify the desired field

  // Save the modified expense
  try {
    expense = await expense.save();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal server error"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Expense archive successfully"));
});

const hardDeleteExpense = asyncHandler(async (req, res) => {
  const expenseId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(expenseId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid expense ID"));
  }

  const expense = await Expence.findById(expenseId);

  if (!expense) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Expense not found"));
  }

  const deletedExpense = await Expence.findByIdAndDelete(expenseId);

  if (!deletedExpense) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Expense not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Expense deleted successfully"));
});

const restoreExpense = asyncHandler(async (req, res) => {
  const expenseId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(expenseId)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid expense ID"));
  }

  let expense = await Expence.findById(expenseId);

  if (!expense) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Expense not found"));
  }

  // Modify the field value here
  expense.soft_delete = false; // Change this line to modify the desired field

  // Save the modified expense
  try {
    expense = await expense.save();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal server error"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Expense restore successfully"));
});

export {
  createExpence,
  getExpence,
  softDeleteExpense,
  getArchiveExpence,
  hardDeleteExpense,
  restoreExpense,
};
