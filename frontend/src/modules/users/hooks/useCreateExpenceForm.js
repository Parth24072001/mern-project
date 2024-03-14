import { useFormik } from "formik";
import { ExpenceSchema } from "../validation";

export const useCreateExpenceForm = (createExpence) => {
  return useFormik({
    initialValues: {
      expence_title: "",
      expence_type: "",
      expence_category: "",
      expence_money: 0,
      // expence_createdBy: "",
    },

    validationSchema: ExpenceSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await createExpence(values);
    },
  });
};
