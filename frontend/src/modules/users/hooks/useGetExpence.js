import { useQuery } from "@tanstack/react-query";
import { getExpence } from "../api";
import { toast } from "react-toastify";

const useGetExpence = (userId) => {
  return useQuery(["get-expence"], () => getExpence(`${userId}`), {
    onSuccess: () => {
      return;
    },
    onError: () => {
      toast("Expence not found", { type: "error" });

      return;
    },
  });
};

export default useGetExpence;
