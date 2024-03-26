import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { PasswordChange } from "../api";

const useChangePassword = () => {
  return useMutation((data) => PasswordChange(data), {
    onSuccess: (response) => {
      toast("Password Change successful!", {
        type: "success",
      });

      return response;
    },
    onError: (error) => {
      toast(error?.response?.data?.message, {
        type: "error",
      });
      console.log(error);
    },
  });
};

export default useChangePassword;
