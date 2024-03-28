import { User } from "../models/user.model.js";

const createUser = async (fullName, email, password, inviteBy, username) => {
  try {
    const user = await User.create({
      fullName,
      email,
      password,
      inviteBy,
      username: username?.toLowerCase(),
    });

    await user.save();
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }
    return createdUser;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
export default { createUser };
