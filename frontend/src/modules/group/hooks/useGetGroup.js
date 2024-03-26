import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { GetGroup } from "../api";

const useGetGroup = (pageIndex, paramsData) => {
  return useQuery(
    ["get-group", pageIndex, paramsData],
    () => GetGroup(pageIndex, paramsData),
    {
      select: (res) => {
        return res?.data?.data;
      },
      onError: () => {
        toast("Groups not found", { type: "error" });

        return;
      },
    }
  );
};

export default useGetGroup;
