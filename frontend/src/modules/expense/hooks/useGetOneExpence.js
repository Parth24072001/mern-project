import { useQuery } from "@tanstack/react-query";
import { GetOneExpence } from "../../users/api";
import { toast } from "react-toastify";

const useGetOneExpence = (editId) => {
  return useQuery(["get-one-expence", editId], () => GetOneExpence(editId), {
    select: (res) => {
      return res?.data?.data?.expense;
    },
    onError: () => {
      toast("Expence not found", { type: "error" });

      return;
    },
  });
};

export default useGetOneExpence;
