import { useFormik } from "formik";
import { ProfileSchema } from "../validation";
import { omit } from "lodash";

export const useProfileUpdateForm = (profileUpdate) => {
  return useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      invite_link: "",
      invited: "",
    },

    validationSchema: ProfileSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await profileUpdate(omit(values, ["invite_link", "invited"]));
    },
  });
};
