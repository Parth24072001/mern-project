import * as Yup from "yup";

export const ExpenceSchema = Yup.object().shape({
  expence_title: Yup.string().required("Expence title is required."),
  expence_type: Yup.string().required("Expence type is required."),
  expence_category: Yup.string().required("Expence category is required."),
  expence_money: Yup.number().min(1).required("Expence money is required."),
});
