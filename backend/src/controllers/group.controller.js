import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Group } from "../models/group.model.js";
import mongoose from "mongoose";

const createGroup = asyncHandler(async (req, res) => {
  const { group_name } = req.body; // Remove group_member from here
  const group_createdBy = req.user._id;
  const currentUser = req.user;

  if (!group_name || group_name.trim() === "") {
    throw new ApiError(400, "Group name is required");
  }

  const lastGroup = await Group.findOne().sort({ group_id: -1 });
  let group_id = 1;

  if (lastGroup && !isNaN(lastGroup.group_id)) {
    group_id = Number(lastGroup.group_id) + 1;
  }

  // Create group with the current user added to the members
  const group = await Group.create({
    group_id,
    group_name,
    group_member: [
      ...req.body.group_member, // Assuming group_member is an array coming from the request
      { value: currentUser.email, label: currentUser.fullName },
    ],
    group_createdBy,
    soft_delete: false,
  });

  if (!group) {
    throw new ApiError(500, "Something went wrong while creating a group");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, group, "Group created Successfully"));
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

  // Check if the group belongs to the current user and if the current user created it
  if (group.group_createdBy.toString() !== req.user._id.toString()) {
    return res
      .status(403)
      .json(
        new ApiResponse(
          403,
          null,
          "Unauthorized: This group does not belong to the current user"
        )
      );
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
  const userId = req.user?._id;

  const startIndex = (pageNumber - 1) * 15;
  const endIndex = startIndex + 15;

  let groups = await Group.find().sort({ createdAt: -1 });

  // Filter groups based on ownership or membership
  groups = groups.filter(
    (group) =>
      group.group_createdBy.toString() === userId.toString() ||
      group.group_member.some((member) => member.value === currentUserEmail)
  );

  if (searchKey) {
    const searchRegex = new RegExp(searchKey, "i");
    groups = groups.filter((group) => group.group_name.match(searchRegex)); // Apply search query
  }

  return res.status(200).json({
    status: 200,
    data: {
      groups: groups
        .filter((group) => !group.soft_delete)
        .map((group) => group.toObject())
        .slice(startIndex, endIndex),
      TotalPage: Math.ceil(
        groups.filter((group) => !group.soft_delete).length / 15
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

    // Check if the group belongs to the current user and if the current user created it
    if (
      group.group_createdBy.toString() !== req.user._id.toString() ||
      group.group_createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        status: 403,
        message:
          "Unauthorized: This group does not belong to the current user or you are not the creator of this group",
      });
    }

    // Update group properties with provided updates
    for (const key in updates) {
      group[key] = updates[key];
    }

    // Save the updated group
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
  const groupId = req.params.id; // Assuming the group id is provided in the request parameters as group_id
  const group = await Group.findOne({ group_id: groupId }); // Change to find by group_id

  if (!group) {
    return res.status(404).json({
      status: 404,
      message: "Group not found",
    });
  }

  // Check if the expense belongs to the current user

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
