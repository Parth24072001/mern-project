import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { RestoreGroup } from "../api";

const useRestoreGroup = (refetch) => {
  return useMutation((data) => RestoreGroup(data), {
    onSuccess: (response) => {
      toast("Group restore successful!", {
        type: "success",
      });
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

export default useRestoreGroup;
