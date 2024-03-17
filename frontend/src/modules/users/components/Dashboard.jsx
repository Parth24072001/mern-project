import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";

import ExpenceDataListing from "./ExpenceDataListing";
import CreateExpenceModal from "./CreateExpenceModal";
import useGetExpence from "../hooks/useGetExpence";
import useArchiveExpence from "../hooks/useArchiveExpence";
import EditExpenceModal from "./EditExpenceModal";

const Dashboard = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [editOpenModel, seteditOpenModel] = useState(false);
  const [editId, setEditId] = useState(null);

  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetExpence(pageIndex);
  const { mutate: DeleteExpences } = useArchiveExpence(refetch);

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button
          variant={"default"}
          onClick={() => setcreateOpenModel(!createOpenModel)}
        >
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
        seteditOpenModel={seteditOpenModel}
        editOpenModel={editOpenModel}
        setEditId={setEditId}
      />

      <ModalPortal open={createOpenModel}>
        <CreateExpenceModal
          setOpenModel={setcreateOpenModel}
          openModel={createOpenModel}
          refetch={refetch}
        />
      </ModalPortal>
      <ModalPortal open={editOpenModel}>
        <EditExpenceModal
          setOpenModel={seteditOpenModel}
          openModel={editOpenModel}
          refetch={refetch}
          editId={editId}
        />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
