import api from "./apiinetrcepter";

export const rereshToken = (refreshToken) => {
    const data = { refreshToken: refreshToken };
    return api.post(`/refresh-token`, data);
};
