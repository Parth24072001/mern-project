import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getAllNotification } from "../api";

const useGetNotifications = () => {
  return useQuery(["get-notifications"], () => getAllNotification(), {
    select: (res) => {
      return res?.data;
    },
    onError: () => {
      toast("Group not found", { type: "error" });

      return;
    },
  });
};

export default useGetNotifications;
