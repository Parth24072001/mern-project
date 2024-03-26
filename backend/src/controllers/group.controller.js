import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Group } from "../models/group.model.js";

const createGroup = asyncHandler(async (req, res) => {
  const { group_name, group_member } = req.body;
  const group_createdBy = req.user._id;
  if ([group_name, group_member].some((field) => field?.trim() === "")) {
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

export { createGroup };
