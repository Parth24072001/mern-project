import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UpdateDetails } from "../api";

const useUpdateUser = (refetch) => {
  return useMutation((data) => UpdateDetails(data), {
    onSuccess: (response) => {
      toast("Profile Updated successful!", {
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

export default useUpdateUser;
