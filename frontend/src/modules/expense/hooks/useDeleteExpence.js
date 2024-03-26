import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { DeleteExpences } from "../api";

const useDeleteExpence = (refetch) => {
  return useMutation((data) => DeleteExpences(data), {
    onSuccess: (response) => {
      toast("Expences delete successful!", {
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

export default useDeleteExpence;
