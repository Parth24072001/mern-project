import { useQuery } from "@tanstack/react-query";
import { getExpence } from "../api";
import { toast } from "react-toastify";

const useGetExpence = () => {
  return useQuery(["get-expence"], () => getExpence(), {
    select: (res) => {
      return res?.data?.data?.expences;
    },
    onError: () => {
      toast("Expence not found", { type: "error" });

      return;
    },
  });
};

export default useGetExpence;
