import { useMutation } from "@tanstack/react-query";
import { NotiFication } from "../api";

const useNotification = (refetch) => {
  return useMutation((id) => NotiFication(id), {
    onSuccess: (response) => {
      refetch();
      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useNotification;
