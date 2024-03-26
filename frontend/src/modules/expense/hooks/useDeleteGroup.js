import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { DeleteGroup } from "../api";

const useDeleteGroup = (refetch) => {
  return useMutation((data) => DeleteGroup(data), {
    onSuccess: (response) => {
      toast("Group delete successful!", {
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

export default useDeleteGroup;
