import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Splitwise } from "../models/splitwise.model.js";

const createSplitWiseExpence = asyncHandler(async (req, res) => {
  const {
    expence_title,
    expence_type,
    expence_category,
    expence_money,
    splitwise_manually,
    splitwise,
    group_id,
  } = req.body;
  const expence_createdBy = req.user._id;
  if (
    [expence_title, expence_type, expence_category, splitwise, group_id].some(
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
  const lastExpence = await Splitwise.findOne().sort({ expence_id: -1 });
  let expence_id = 1;

  if (lastExpence && !isNaN(lastExpence.expence_id)) {
    expence_id = Number(lastExpence.expence_id) + 1;
  }

  const expence = await Splitwise.create({
    expence_id,
    expence_title,
    expence_type,
    expence_category,
    expence_money,
    expence_createdBy,

    splitwise_manually,
    group_id,
    splitwise,
  });

  if (!expence) {
    throw new ApiError(500, "Something went wrong while creating a expence");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, expence, " Split Wise Expence created Successfully")
    );
});

const getSplitwiseExpenses = asyncHandler(async (req, res) => {
  const pageNumber = req.params.pageindex || 1;
  const searchKey = req.params.searchKey;
  const { group_id } = req.params;

  const startIndex = (pageNumber - 1) * 15;
  const endIndex = startIndex + 15;

  let query = { group_id: group_id };

  if (searchKey) {
    const searchRegex = new RegExp(searchKey, "i");
    query = {
      ...query,
      $or: [
        { expence_name: { $regex: searchRegex } },
        { expence_type: { $regex: searchRegex } },
        { expence_category: { $regex: searchRegex } },
        { expence_title: { $regex: searchRegex } },
      ],
    };
  }

  let expences = await Splitwise.find(query).sort({ createdAt: -1 });

  return res.status(200).json({
    status: 200,
    data: {
      expences: expences

        .map((expence) => expence.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(expences.length / 15),
    },
    message: "Expenses fetched successfully",
  });
});

export { createSplitWiseExpence, getSplitwiseExpenses };
