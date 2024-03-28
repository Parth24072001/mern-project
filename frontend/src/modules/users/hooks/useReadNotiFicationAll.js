import { useMutation } from "@tanstack/react-query";
import { NotiFicationReadAll } from "../api";

const useReadNotiFicationAll = (refetch) => {
  return useMutation(() => NotiFicationReadAll(), {
    onSuccess: (response) => {
      refetch();

      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useReadNotiFicationAll;
