import { useQuery } from "@tanstack/react-query";
import { getArchiveExpence } from "../api";
import { toast } from "react-toastify";

const useGetArchiveExpence = (pageIndex) => {
  return useQuery(
    ["get-archive-expence", pageIndex],
    () => getArchiveExpence(pageIndex),
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

export default useGetArchiveExpence;
