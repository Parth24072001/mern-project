import api from "../../../shared/api/apiinetrcepter";
export const CreateGroup = (data) => {
  return api.post(`group/create-group`, data);
};

export const EditGroup = (data) => {
  return api.patch(`group/edit-group`, data);
};
