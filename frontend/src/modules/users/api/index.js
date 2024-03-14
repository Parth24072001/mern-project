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
export const getExpence = () => {
  return api.post(`expence/get-expence`);
};
