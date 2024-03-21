import cron from "node-cron";
import { Expence } from "../models/expense.model.js";

const task = cron.schedule("59 23 * * *", async () => {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days ago

  try {
    const expensesToDelete = await Expence.find({
      soft_delete: true,
      updatedAt: { $lte: thirtyDaysAgo },
    });

    if (expensesToDelete.length > 0) {
      for (const expense of expensesToDelete) {
        const updatedAtDate = new Date(expense.updatedAt);
        if (updatedAtDate <= thirtyDaysAgo) {
          await Expence.findByIdAndDelete(expense._id);
        }
      }
    } else {
    }
  } catch (error) {
    console.error("Error occurred while deleting expenses:", error);
  }
});
task.start();
