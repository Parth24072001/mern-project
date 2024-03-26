import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { ArchiveGroup } from "../../group/api";

const useArchiveGroup = (refetch) => {
  return useMutation((data) => ArchiveGroup(data), {
    onSuccess: (response) => {
      toast("Group archive successful!", {
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

export default useArchiveGroup;
