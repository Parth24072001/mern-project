import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { RestoreExpences } from "../api";

const useRestoreExpence = (refetch) => {
  return useMutation((data) => RestoreExpences(data), {
    onSuccess: (response) => {
      toast("Expence restore successful!", {
        type: "success",
      });
      refetch();
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

export default useRestoreExpence;
