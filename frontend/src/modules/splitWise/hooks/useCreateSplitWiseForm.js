import { useFormik } from "formik";

import { SplitWiseSchema } from "../validation";
import useCreateSplitWise from "./useCreateSplitWise";
import useEditSplitWise from "./useEditSplitWise";

export const useCreateSplitWiseForm = (setOpenModel, refetch, isEdit) => {
  const { mutate: CreateExpence } = useCreateSplitWise(setOpenModel, refetch);

  const { mutate: EditExpence } = useEditSplitWise(setOpenModel, refetch);
  return useFormik({
    initialValues: {
      expence_title: "",
      expence_type: "",
      expence_category: "",
      expence_money: 0,
      expence_id: "",
      splitwise: "",
      splitwise_manually: "",
      group_id: "",
    },

    validationSchema: SplitWiseSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await (isEdit ? EditExpence(values) : CreateExpence(values));
    },
  });
};
