import { isEmpty, omit } from "lodash";
import api from "../../../shared/api/apiinetrcepter";

export const CreateExpence = (data) => {
  return api.post(`expence/create-expence`, omit(data, "expence_id"));
};
export const EditExpence = (data) => {
  return api.patch(
    `expence/edit-expence/${data.expence_id}`,
    omit(data, "expence_id")
  );
};
export const GetOneExpence = (Id) => {
  return api.get(`expence/get-expence-by-id/${Id}`);
};
export const getExpence = (pageIndex, paramsData) => {
  if (isEmpty(paramsData)) {
    return api.post(`expence/get-expence/${pageIndex}`);
  } else {
    return api.post(`expence/get-expence/${pageIndex}/${paramsData}`);
  }
};
export const DeleteExpences = (id) => {
  return api.delete(`expence/delete-expence/${id}`);
};
export const DeleteGroup = (id) => {
  return api.delete(`group/delete-group/${id}`);
};
