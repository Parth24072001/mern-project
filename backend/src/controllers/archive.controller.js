// import mongoose from "mongoose";
// import { Expence } from "../models/expense.model.js";
// import { asyncHandler } from "../utils/asyncHandler.js";
// import { Archive } from "../models/archive.model.js";
// import { ApiResponse } from "../utils/ApiResponse.js";

// const archieveExpense = asyncHandler(async (req, res) => {
//   const {
//     expence_title,
//     expence_type,
//     expence_category,
//     expence_money,
//     _id,
//     expence_createdBy,
//   } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res
//       .status(400)
//       .json(new ApiResponse(400, null, "Invalid expense ID"));
//   }

//   const expense = await Expence.findById(_id);

//   if (!expense) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, null, "Expense not found"));
//   }

//   await Archive.create({
//     expence_title,
//     expence_type,
//     expence_category,
//     expence_money,
//     expence_createdBy,
//   });
//   const deletedExpense = await Expence.findByIdAndDelete(_id);

//   if (!deletedExpense) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, null, "Expense not found"));
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, null, "Expense deleted successfully"));
// });

// export { archieveExpense };
