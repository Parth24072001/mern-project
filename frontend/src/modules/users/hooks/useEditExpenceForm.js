import { useFormik } from "formik";
import { ExpenceSchema } from "../validation";

export const useEditExpenceForm = (editExpence) => {
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
      await editExpence(values);
    },
  });
};
