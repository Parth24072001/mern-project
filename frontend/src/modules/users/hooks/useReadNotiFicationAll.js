import { useMutation } from "@tanstack/react-query";
import { NotiFicationReadAll } from "../api";

const useReadNotiFicationAll = () => {
  return useMutation(() => NotiFicationReadAll(), {
    onSuccess: (response) => {
      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useReadNotiFicationAll;
