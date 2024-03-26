import { useFormik } from "formik";

import { GroupSchema } from "../validation";
import useCreateGroup from "./useCreateGroup";
import useEditGroup from "./useEditGroup";

export const useCreateGroupForm = (setOpenModel, refetch, isEdit) => {
  const { mutate: CreateGroup } = useCreateGroup(setOpenModel, refetch);

  const { mutate: EditGroup } = useEditGroup(setOpenModel, refetch);
  return useFormik({
    initialValues: {
      group_name: "",
      group_member: "",
    },

    validationSchema: GroupSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await (isEdit ? EditGroup(values) : CreateGroup(values));
    },
  });
};
