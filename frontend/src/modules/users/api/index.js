import { omit } from "lodash";
import api from "../../../shared/api/apiinetrcepter";

export const Signup = (data) => {
  return api.post(`users/register`, data);
};
export const Login = (data) => {
  return api.post(`users/login`, data);
};
export const me = () => {
  return api.get(`users/current-user`);
};
export const UpdateDetails = (data) => {
  return api.patch(`users/update-account`, data);
};
export const PasswordChange = (data) => {
  return api.post(`users/change-password`, data);
};
export const DeleteAccount = (data) => {
  return api.delete(`users/delete-account`, data);
};

export const CreateExpence = (data) => {
  return api.post(`expence/create-expence`, data);
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
export const getExpence = (pageIndex) => {
  return api.post(`expence/get-expence/${pageIndex}`);
};

export const getArchiveExpence = (pageIndex) => {
  return api.post(`expence/get-archive-expence/${pageIndex}`);
};

export const ArchiveExpences = (id) => {
  return api.post(`expence/archive-expence/${id}`);
};

export const RestoreExpences = (id) => {
  return api.post(`expence/restore-expence/${id}`);
};

export const DeleteExpences = (id) => {
  return api.delete(`expence/delete-expence/${id}`);
};
