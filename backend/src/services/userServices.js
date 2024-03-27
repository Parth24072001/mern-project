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

//   const registerUser = async (req, res) => {
//     const { fullName, email, username, password, inviteBy } = req.body;

//     if (
//       [fullName, email, username, password].some((field) => field?.trim() === "")
//     ) {
//       throw new ApiError(400, "All fields are required");
//     }
//     try {
//         const existedUser = await User.findOne({
//             $or: [{ username }, { email }],
//           });

//           if (existedUser) {
//             throw new ApiError(409, "User with email or username already exists");
//           }

//       const createdUser = await talesServices.createUser(
//         fullName,
//         email,
//         password,
//         inviteBy,
//          username?.toLowerCase()
//       );
//       return res
//       .status(201)
//       .json(new ApiResponse(200, createdUser, "User registered Successfully"));
//     } catch (error) {
//       console.error("Something Went Wrong!", error);
//       res.status(500).json({ error: error });
//     }
//   };
