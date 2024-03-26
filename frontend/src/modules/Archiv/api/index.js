import api from "../../../shared/api/apiinetrcepter";

export const getArchiveExpence = (pageIndex) => {
  return api.post(`expence/get-archive-expence/${pageIndex}`);
};
export const getArchiveGroup = (pageIndex) => {
  return api.post(`group/get-archive-group/${pageIndex}`);
};
export const getArchiveExpences = (id) => {
  return api.post(`expence/archive-expence/${id}`);
};

export const RestoreExpences = (id) => {
  return api.post(`expence/restore-expence/${id}`);
};

export const RestoreGroup = (id) => {
  return api.post(`group/restore-group/${id}`);
};
