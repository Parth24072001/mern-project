import { useFormik } from "formik";

import useEditExpence from "./useEditExpence";
import useCreateExpence from "./useCreateExpence";
import { ExpenceSchema } from "../validation";

export const useCreateExpenceForm = (setOpenModel, refetch, isEdit) => {
  const { mutate: CreateExpence } = useCreateExpence(setOpenModel, refetch);

  const { mutate: EditExpence } = useEditExpence(setOpenModel, refetch);
  return useFormik({
    initialValues: {
      expence_title: "",
      expence_type: "",
      expence_category: "",
      expence_money: 0,
      expence_id: "",
    },

    validationSchema: ExpenceSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await (isEdit ? EditExpence(values) : CreateExpence(values));
    },
  });
};
