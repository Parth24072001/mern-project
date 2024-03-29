import api from "../../../shared/api/apiinetrcepter";

export const Signup = (data) => {
  return api.post(`users/register`, data);
};
export const NotiFication = (id) => {
  return api.patch(`notification/read-notification/${id}`);
};
export const NotiFicationReadAll = () => {
  return api.patch(`notification/readall`);
};
export const getAllNotification = () => {
  return api.get(`notification/notifications`);
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
