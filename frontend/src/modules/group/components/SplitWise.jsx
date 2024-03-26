import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import GroupAddEditModal from "./GroupAddEditModal";

const SplitWise = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };
  return (
    <div>
      <Button variant={"default"} onClick={() => onclickCreate()}>
        Create Group
      </Button>

      <ModalPortal open={createOpenModel}>
        <GroupAddEditModal
          setOpenModel={setcreateOpenModel}
          openModel={createOpenModel}
          refetch={null}
          editData={editData}
          isEdit={isEdit}
        />
      </ModalPortal>
    </div>
  );
};

export default SplitWise;
