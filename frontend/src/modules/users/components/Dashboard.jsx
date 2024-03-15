import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";

import ExpenceDataListing from "./ExpenceDataListing";
import CreateExpenceModal from "./CreateExpenceModal";

const Dashboard = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
        <Button variant={"default"} onClick={() => setOpenModel(!openModel)}>
          Create Expence
        </Button>
      </div>
      <ExpenceDataListing />

      <ModalPortal open={openModel}>
        <CreateExpenceModal setOpenModel={setOpenModel} openModel={openModel} />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
