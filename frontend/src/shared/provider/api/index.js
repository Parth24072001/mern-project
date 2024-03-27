import api from "../../api/apiinetrcepter";

export const me = () => {
  return api.get(`users/current-user`);
};
