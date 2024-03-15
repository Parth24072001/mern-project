import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";

import ExpenceDataListing from "./ExpenceDataListing";
import CreateExpenceModal from "./CreateExpenceModal";
import useGetExpence from "../hooks/useGetExpence";
import useDeleteExpence from "../hooks/useDeleteExpence";

const Dashboard = () => {
  const [openModel, setOpenModel] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetExpence(pageIndex);
  const { mutate: DeleteExpences } = useDeleteExpence(refetch);

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button variant={"default"} onClick={() => setOpenModel(!openModel)}>
          Create Expence
        </Button>
      </div>
      <ExpenceDataListing
        isLoading={isLoading}
        isFetching={isFetching}
        expence={expence}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        DeleteExpences={DeleteExpences}
      />

      <ModalPortal open={openModel}>
        <CreateExpenceModal
          setOpenModel={setOpenModel}
          openModel={openModel}
          refetch={refetch}
        />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
