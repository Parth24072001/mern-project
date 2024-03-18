import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";

import ExpenceAddEditModal from "./ExpenceAddEditModal";

const SplitWise = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
  };

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button variant={"default"} onClick={() => onclickCreate()}>
          Create SplitWise
        </Button>
      </div>

      <ModalPortal open={createOpenModel}>
        <ExpenceAddEditModal
          setOpenModel={setcreateOpenModel}
          openModel={createOpenModel}
        />
      </ModalPortal>
    </div>
  );
};

export default SplitWise;
