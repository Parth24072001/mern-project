import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import useGetExpence from "../../expense/hooks/useGetExpence";
import useArchiveExpence from "../hooks/useArchiveExpence";
import Search from "./Search";
import Loader from "../../../shared/components/loader/Loader";
import ExpenceDataListing from "../../expense/components/ExpenceDataListing";
import ExpenceAddEditModal from "../../expense/components/ExpenceAddEditModal";

const Dashboard = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [paramsData, setParamsData] = useState([]);

  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetExpence(pageIndex, paramsData);
  const { mutate: DeleteExpences } = useArchiveExpence(refetch);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };
  if (isLoading) {
    return (
      <div>
        <Loader />;
      </div>
    );
  }

  return (
    <div>
      <div className="flex  justify-between items-center mb-3">
        <Search setParamsData={setParamsData} setPageIndex={setPageIndex} />
        <div className=" flex justify-center items-center gap-3">
          <label>Total Income</label>
          <p>{expence?.TotalIncome}</p>
        </div>
        <div className=" flex justify-center items-center gap-3">
          <label>Total Expense</label>
          <p>{expence?.TotalExpense}</p>
        </div>
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
