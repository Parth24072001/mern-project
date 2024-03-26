import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { EditExpence } from "../api";

const useEditExpence = (setOpenModel, refetch) => {
  return useMutation((data) => EditExpence(data), {
    onSuccess: (response) => {
      toast("Expence edit successful!", {
        type: "success",
      });
      setOpenModel(false);
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

export default useEditExpence;
