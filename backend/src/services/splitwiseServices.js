import { Splitwise } from "../models/splitwise.model.js";

const createSplitWise = async (
  expence_id,
  expence_title,
  expence_type,
  expence_category,
  expence_money,
  expence_createdBy,

  splitwise_manually,
  group_id,
  splitwise
) => {
  try {
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
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }
    return expence;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
export default { createSplitWise };
