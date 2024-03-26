import { isEmpty, omit } from "lodash";
import api from "../../../shared/api/apiinetrcepter";
export const CreateGroup = (data) => {
  return api.post(`group/create-group`, data);
};

export const EditGroup = (data) => {
  return api.patch(`group/edit-group/${data._id}`, omit(data, "_id"));
};

export const ArchiveGroup = (id) => {
  return api.post(`group/archive-group/${id}`);
};

// export const GetGroup = (id) => {
//   return api.get(`group/get-group/${id}`);
// };

export const GetGroup = (pageIndex, paramsData) => {
  if (isEmpty(paramsData)) {
    return api.post(`group/get-group/${pageIndex}`);
  } else {
    return api.post(`group/get-group/${pageIndex}/${paramsData}`);
  }
};
