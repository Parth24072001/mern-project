import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getOnegroup } from "../api";

const useGetOneGroup = (id) => {
  return useQuery(["get-one-expence"], () => getOnegroup(id), {
    select: (res) => {
      return res?.data?.data;
    },
    onError: () => {
      toast("Group not found", { type: "error" });

      return;
    },
  });
};

export default useGetOneGroup;
