import api from "../../../shared/api/apiinetrcepter";

export const Signup = (data) => {
    return api.post(`/register`, data);
};
export const Login = (data) => {
    return api.post(`/login`, data);
};
export const me = () => {
    return api.get(`/current-user`);
};
