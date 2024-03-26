import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { CreateGroup } from "../api";

const useCreateGroup = (setOpenModel, refetch) => {
  return useMutation((data) => CreateGroup(data), {
    onSuccess: (response) => {
      toast("Group created successful!", {
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

export default useCreateGroup;
