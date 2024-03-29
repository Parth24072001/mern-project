import * as Yup from "yup";

export const GroupSchema = Yup.object().shape({
  group_name: Yup.string().required("Group name  is required."),
  group_member: Yup.array().required("Group member is required."),
});
