import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import ExpenceDataListing from "./ExpenceDataListing";
import useGetExpence from "../hooks/useGetExpence";
import useArchiveExpence from "../hooks/useArchiveExpence";
import ExpenceAddEditModal from "./ExpenceAddEditModal";

const Dashboard = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetExpence(pageIndex);
  const { mutate: DeleteExpences } = useArchiveExpence(refetch);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };
  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button variant={"default"} onClick={() => onclickCreate()}>
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
        seteditOpenModel={setcreateOpenModel}
        editOpenModel={createOpenModel}
        setEditData={setEditData}
        setisEdit={setisEdit}
      />

      <ModalPortal open={createOpenModel}>
        <ExpenceAddEditModal
          setOpenModel={setcreateOpenModel}
          openModel={createOpenModel}
          refetch={refetch}
          editData={editData}
          isEdit={isEdit}
        />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
