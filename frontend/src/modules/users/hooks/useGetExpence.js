import { useQuery } from "@tanstack/react-query";
import { getExpence } from "../api";
import { toast } from "react-toastify";

const useGetExpence = (pageIndex) => {
  return useQuery(["get-expence", pageIndex], () => getExpence(pageIndex), {
    select: (res) => {
      return res?.data?.data;
    },
    onError: () => {
      toast("Expence not found", { type: "error" });

      return;
    },
  });
};

export default useGetExpence;
