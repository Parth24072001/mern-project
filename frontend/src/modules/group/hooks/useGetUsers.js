import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Getusers } from "../api";

const useGetUsers = () => {
  return useQuery(["get-users"], () => Getusers(), {
    select: (res) => {
      return res?.data?.data;
    },
    onError: () => {
      toast("Users not found", { type: "error" });

      return;
    },
  });
};

export default useGetUsers;
