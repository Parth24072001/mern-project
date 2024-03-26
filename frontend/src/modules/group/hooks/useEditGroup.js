import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { EditGroup } from "../api";

const useEditGroup = (setOpenModel, refetch) => {
  return useMutation((data) => EditGroup(data), {
    onSuccess: (response) => {
      toast("Group Edited successful!", {
        type: "success",
      });
      setOpenModel(false);
      refetch();

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

export default useEditGroup;
