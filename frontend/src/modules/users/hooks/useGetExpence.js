import { useQuery } from "@tanstack/react-query";
import { getExpence } from "../api";
import { toast } from "react-toastify";

const useGetExpence = (pageIndex, paramsData) => {
  return useQuery(
    ["get-expence", pageIndex, paramsData],
    () => getExpence(pageIndex, paramsData),
    {
      select: (res) => {
        return res?.data?.data;
      },
      onError: () => {
        toast("Expence not found", { type: "error" });

        return;
      },
    }
  );
};

export default useGetExpence;
