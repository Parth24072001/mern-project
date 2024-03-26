import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getArchiveExpences } from "../api";

const useArchiveExpence = (refetch) => {
  return useMutation((data) => getArchiveExpences(data), {
    onSuccess: (response) => {
      toast("Expences archive successful!", {
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

export default useArchiveExpence;
