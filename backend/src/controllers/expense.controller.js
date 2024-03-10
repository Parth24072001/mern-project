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

// const getCurrentUser = asyncHandler(async (req, res) => {
//   const invited = await User.aggregate([
//     {
//       $match: {
//         username: { $ne: req.user?.username }, // Match documents where the username is not the same as the provided username
//         inviteBy: req.user?.username, // Match the inviteBy field with the provided username
//       },
//     },
//   ]);
//   const currentUserData = req.user.toObject(); // Assuming req.user contains the current user's data
//   return res.status(200).json({
//     status: 200,

//     data: { ...currentUserData, invited: invited?.length }, // Spread currentUserData object

//     message: "User fetched successfully",
//   });
// });

// const updateAccountDetails = asyncHandler(async (req, res) => {
//   const { fullName, email } = req.body;

//   if (!fullName || !email) {
//     throw new ApiError(400, "All fields are required");
//   }

//   const user = await User.findByIdAndUpdate(
//     req.user?._id,
//     {
//       $set: {
//         fullName,
//         email: email,
//       },
//     },
//     { new: true }
//   ).select("-password");

//   return res
//     .status(200)
//     .json(new ApiResponse(200, user, "Account details updated successfully"));
// });

// const deleteAccount = asyncHandler(async (req, res) => {
//   // You might want to prompt the user for confirmation before proceeding with deletion
//   const user = await User.findByIdAndDelete(req.user?._id);

//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, null, "Account deleted successfully"));
// });

export { createExpence };
