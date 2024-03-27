import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getDeleteSplitWise } from "../api";

const useDeleteSplitWise = (refetch) => {
  return useMutation((data) => getDeleteSplitWise(data), {
    onSuccess: (response) => {
      toast("SplitWise delete successful!", {
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

export default useDeleteSplitWise;
