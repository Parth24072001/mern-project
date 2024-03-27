import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CreateSplitWise } from "../api";

const useCreateSplitWise = (setOpenModel, refetch) => {
  return useMutation((data) => CreateSplitWise(data), {
    onSuccess: (response) => {
      toast("splitWise created successful!", {
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

export default useCreateSplitWise;
