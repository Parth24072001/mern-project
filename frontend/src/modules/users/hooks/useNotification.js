import { useMutation } from "@tanstack/react-query";
import { NotiFication } from "../api";

const useNotification = () => {
  return useMutation((id) => NotiFication(id), {
    onSuccess: (response) => {
      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useNotification;
