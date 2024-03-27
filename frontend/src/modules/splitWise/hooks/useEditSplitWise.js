import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { EditSplitWise } from "../api";

const useEditSplitWise = (setOpenModel, refetch) => {
  return useMutation((data) => EditSplitWise(data), {
    onSuccess: (response) => {
      toast("splitWise edit successful!", {
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

export default useEditSplitWise;
