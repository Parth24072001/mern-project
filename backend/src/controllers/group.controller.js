import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Group } from "../models/group.model.js";
import mongoose from "mongoose";

const createGroup = asyncHandler(async (req, res) => {
  const { group_name, group_member } = req.body;
  const group_createdBy = req.user._id;
  if ([group_name].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ group_createdBy }],
  });

  if (existedUser) {
    throw new ApiError(409, "User Invalid");
  }
  const lastGroup = await Group.findOne().sort({ group_id: -1 });
  let group_id = 1;

  if (lastGroup && !isNaN(lastGroup.group_id)) {
    group_id = Number(lastGroup.group_id) + 1;
  }

  const group = await Group.create({
    group_id,
    group_name,
    group_member,
    group_createdBy,
    soft_delete: false,
  });

  if (!group) {
    throw new ApiError(500, "Something went wrong while creating a group");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, group, "Group   created Successfully"));
});

const softDeleteGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json(new ApiResponse(400, null, "Invalid group ID"));
  }

  let group = await Group.findById(groupId);

  if (!group) {
    return res.status(404).json(new ApiResponse(404, null, "Group not found"));
  }

  // Modify the field value here
  group.soft_delete = true; // Change this line to modify the desired field

  // Save the modified expense
  try {
    group = await group.save();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal server error"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Group archive successfully"));
});

const getGroup = asyncHandler(async (req, res) => {
  const pageNumber = req.params.pageindex || 1;
  const searchKey = req.params.searchKey;
  const currentUserEmail = req.user.email; // Assuming user email is accessible this way

  const startIndex = (pageNumber - 1) * 15;
  const endIndex = startIndex + 15;
  const groupId = req.user?._id;

  let query = {
    $or: [
      { group_createdBy: groupId }, // Groups created by current user
      { "group_member.value": currentUserEmail }, // Groups where current user is a member
    ],
  };

  if (searchKey) {
    const searchRegex = new RegExp(searchKey, "i");
    query.$or.push({ group_name: { $regex: searchRegex } }); // Add search condition to existing $or array
  }

  let groups = await Group.find(query).sort({ createdAt: -1 });

  return res.status(200).json({
    status: 200,
    data: {
      groups: groups
        .filter((group) => group.soft_delete === false)
        .map((group) => group.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        groups.filter((group) => group.soft_delete === false).length / 15
      ),
    },
    message: "Groups fetched successfully",
  });
});

const editGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.id; // Assuming the expense id is provided in the request parameters
  const updates = req.body; // Assuming the updates are provided in the request body

  try {
    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({
        status: 404,
        message: "Group not found",
      });
    }

    // Check if the expense belongs to the current user
    if (group.group_createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        status: 403,
        message: "Unauthorized: This group does not belong to the current user",
      });
    }

    // Update expense properties with provided updates
    for (const key in updates) {
      group[key] = updates[key];
    }

    // Save the updated expense
    await group.save();

    return res.status(200).json({
      status: 200,
      data: {
        group: group.toObject(),
      },
      message: "Group updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

const restoreGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json(new ApiResponse(400, null, "Invalid Group ID"));
  }

  let group = await Group.findById(groupId);

  if (!group) {
    return res.status(404).json(new ApiResponse(404, null, "Group not found"));
  }

  // Modify the field value here
  group.soft_delete = false; // Change this line to modify the desired field

  // Save the modified expense
  try {
    group = await group.save();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal server error"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Group restore successfully"));
});

const hardDeleteGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json(new ApiResponse(400, null, "Invalid group ID"));
  }

  const group = await Group.findById(groupId);

  if (!group) {
    return res.status(404).json(new ApiResponse(404, null, "group not found"));
  }

  const deletedGroup = await Group.findByIdAndDelete(groupId);

  if (!deletedGroup) {
    return res.status(404).json(new ApiResponse(404, null, "Group not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Group deleted successfully"));
});

const getOneGroup = asyncHandler(async (req, res) => {
  const groupId = req.params.id; // Assuming the expense id is provided in the request parameters
  const group = await Group.findById(groupId);

  if (!group) {
    return res.status(404).json({
      status: 404,
      message: "Group not found",
    });
  }

  // Check if the expense belongs to the current user
  if (group.group_createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      status: 403,
      message: "Unauthorized: This group does not belong to the current user",
    });
  }

  return res.status(200).json({
    status: 200,
    data: {
      group: group.toObject(),
    },
    message: "Group fetched successfully",
  });
});
const getArchiveGroup = asyncHandler(async (req, res) => {
  const pageNumber = req.params.pageindex || 1;
  const startIndex = (pageNumber - 1) * 10;
  const endIndex = startIndex + 10;
  const groupId = req.user?._id;

  const groups = await Group.find({ group_createdBy: groupId });

  return res.status(200).json({
    status: 200,
    data: {
      groups: groups
        .filter((group) => group.soft_delete === true)
        .map((group) => group.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        groups.filter((group) => group.soft_delete === true).length / 10
      ),
    },
    message: "Groups fetched successfully",
  });
});
export {
  createGroup,
  getGroup,
  editGroup,
  softDeleteGroup,
  restoreGroup,
  hardDeleteGroup,
  getOneGroup,
  getArchiveGroup,
};
