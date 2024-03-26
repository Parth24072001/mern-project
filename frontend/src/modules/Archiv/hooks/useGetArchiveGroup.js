import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getArchiveGroup } from "../api";

const useGetArchiveGroup = (pageIndex) => {
  return useQuery(
    ["get-archive-group", pageIndex],
    () => getArchiveGroup(pageIndex),
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

export default useGetArchiveGroup;
