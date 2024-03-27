import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getSplitWise } from "../api";

const useGetSplitWise = (pageIndex, paramsData, groupid) => {
  return useQuery(
    ["get-splitwise", groupid, pageIndex, paramsData],
    () => getSplitWise(pageIndex, paramsData, groupid),
    {
      select: (res) => {
        return res?.data?.data;
      },
      onError: () => {
        toast("splitwise not found", { type: "error" });

        return;
      },
    }
  );
};

export default useGetSplitWise;
