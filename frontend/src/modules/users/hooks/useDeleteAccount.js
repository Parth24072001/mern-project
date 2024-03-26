import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { DeleteAccount } from "../api";

const useDeleteAccount = () => {
  return useMutation((data) => DeleteAccount(data), {
    onSuccess: (response) => {
      toast("Account Deleted successful!", {
        type: "success",
      });

      return response;
    },
    onError: (error) => {
      toast("error?.response?.data?.message", {
        type: "error",
      });
      console.log(error);
    },
  });
};

export default useDeleteAccount;
