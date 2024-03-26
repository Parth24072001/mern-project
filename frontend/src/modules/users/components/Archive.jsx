import { useState } from "react";
import useGetArchiveExpence from "../hooks/useGetArchiveExpence";
import ArchiveDataListing from "./ArchiveDataListing";
import useRestoreExpence from "../hooks/useRestoreExpence";
import useDeleteExpence from "../../expense/hooks/useDeleteExpence";

const Archive = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetArchiveExpence(pageIndex);

  const { mutate: DeleteExpences } = useDeleteExpence(refetch);
  const { mutate: RestoreExpences } = useRestoreExpence(refetch);

  return (
    <ArchiveDataListing
      isLoading={isLoading}
      isFetching={isFetching}
      expence={expence}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      DeleteExpences={DeleteExpences}
      RestoreExpences={RestoreExpences}
    />
  );
};

export default Archive;
