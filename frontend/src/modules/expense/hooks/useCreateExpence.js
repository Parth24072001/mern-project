import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CreateExpence } from "../api";

const useCreateExpence = (setOpenModel, refetch) => {
  return useMutation((data) => CreateExpence(data), {
    onSuccess: (response) => {
      toast("Expence created successful!", {
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

export default useCreateExpence;
