import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CreateExpence } from "../api";

const useCreateExpence = () => {
  return useMutation((data) => CreateExpence(data), {
    onSuccess: (response) => {
      toast("Expence created successful!", {
        type: "success",
      });

      return response;
    },
    onError: (error) => {
      toast("Something Went Wrong", {
        type: "error",
      });
      console.log(error);
    },
  });
};

export default useCreateExpence;
