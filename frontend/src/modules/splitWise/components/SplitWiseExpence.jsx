import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import Search from "../../users/components/Search";
import useGetSplitWise from "../hooks/useGetSplitWise";
import SplitWiseAddEditModal from "./SplitWiseAddEditModal";
import SplitWiseDataListing from "./SplitWiseDataListing";
import useDeleteSplitWise from "../hooks/useDeleteSplitWise";
import { useParams } from "react-router-dom";

const SplitWiseExpence = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [paramsData, setParamsData] = useState("");

  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const { groupid } = useParams();

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetSplitWise(pageIndex, paramsData, groupid);
  const { mutate: DeleteSplitWise } = useDeleteSplitWise(refetch);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };

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
          Create SplitWise
        </Button>
      </div>
      <SplitWiseDataListing
        isLoading={isLoading}
        isFetching={isFetching}
        expence={expence}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        DeleteExpences={DeleteSplitWise}
        seteditOpenModel={setcreateOpenModel}
        editOpenModel={createOpenModel}
        setEditData={setEditData}
        setisEdit={setisEdit}
      />

      <ModalPortal open={createOpenModel}>
        <SplitWiseAddEditModal
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

export default SplitWiseExpence;
