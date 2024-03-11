import { useFormik } from "formik";
import { ChangePasswordSchema } from "../validation";

export const useUpdatePasswordForm = (UpdatePassWord) => {
  return useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },

    validationSchema: ChangePasswordSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await UpdatePassWord(values);
    },
  });
};
