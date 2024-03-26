import { useState } from "react";
import useGetArchiveGroup from "../hooks/useGetArchiveGroup";
import useDeleteGroup from "../../expense/hooks/useDeleteGroup";
import useRestoreGroup from "../hooks/useRestoreGroup";
import ArchieveGroupListing from "./ArchieveGroupListing";

const ArchieveGroup = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const {
    data: group,
    isLoading,
    isFetching,
    refetch,
  } = useGetArchiveGroup(pageIndex);

  const { mutate: DeleteGroup } = useDeleteGroup(refetch);
  const { mutate: RestoreGroup } = useRestoreGroup(refetch);

  return (
    <ArchieveGroupListing
      isLoading={isLoading}
      isFetching={isFetching}
      group={group}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      DeleteExpences={DeleteGroup}
      RestoreExpences={RestoreGroup}
    />
  );
};

export default ArchieveGroup;
