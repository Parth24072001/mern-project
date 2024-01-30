import Cookies from "js-cookie";

const getItemFromCookie = (key) => Cookies.get(key);

const setItemInCookie = (key, value) => Cookies.set(key, value);

export const removeItemInCookie = (key) => Cookies.remove(key);

export { getItemFromCookie, setItemInCookie };
