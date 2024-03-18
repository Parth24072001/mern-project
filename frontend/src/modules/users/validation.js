import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("User id required."),
  fullName: Yup.string().required("fullName is required."),
  email: Yup.string().required("email is required."),
  password: Yup.string().required("Password is required."),
});

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required."),
  password: Yup.string().required("Password is required."),
});

export const ProfileSchema = Yup.object().shape({
  username: Yup.string().required("Username is required."),
  fullName: Yup.string().required("fullName is required."),
  email: Yup.string().required("email is required."),
  invite_link: Yup.string().required("invite_link is required."),
  invited: Yup.string().required("invited is required."),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("oldPassword is required."),
  newPassword: Yup.string().required("newPassword is required."),
});

export const ExpenceSchema = Yup.object().shape({
  expence_title: Yup.string().required("Expence title is required."),
  expence_type: Yup.string().required("Expence type is required."),
  expence_category: Yup.string().required("Expence category is required."),
  expence_money: Yup.number().min(1).required("Expence money is required."),
});
