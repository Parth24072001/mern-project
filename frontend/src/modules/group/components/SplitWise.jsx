import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import GroupAddEditModal from "./GroupAddEditModal";
import Search from "../../users/components/Search";
import GroupDataListing from "./GroupDataListing";
import useGetGroup from "../hooks/useGetGroup";
import useArchiveGroup from "../../Archiv/hooks/useArchiveGroup";

const SplitWise = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [paramsData, setParamsData] = useState([]);

  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: group,
    isLoading,
    isFetching,
    refetch,
  } = useGetGroup(pageIndex, paramsData);

  const { mutate: DeleteGroup } = useArchiveGroup(refetch);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };
  return (
    <div>
      <div className="flex  justify-between items-center mb-3">
        <Search setParamsData={setParamsData} setPageIndex={setPageIndex} />

        <Button variant={"default"} onClick={() => onclickCreate()}>
          Create Group
        </Button>
      </div>

      <GroupDataListing
        isLoading={isLoading}
        isFetching={isFetching}
        group={group}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        DeleteGroup={DeleteGroup}
        seteditOpenModel={setcreateOpenModel}
        editOpenModel={createOpenModel}
        setEditData={setEditData}
        setisEdit={setisEdit}
      />
      <ModalPortal open={createOpenModel}>
        <GroupAddEditModal
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

export default SplitWise;
