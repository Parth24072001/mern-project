// import useCreateExpence from "../hooks/useCreateExpence";
// import useUserInfo from "../hooks/useUserInfo";
// import { useEffect } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import useGetExpence from "../hooks/useGetExpence";
import ConfirmationModal from "./ConforMationModal";

const Dashboard = () => {
  // const { data: userInfo } = useUserInfo();
  const { data: expence } = useGetExpence("8758789147");

  // const { mutate: CreateExpence } = useCreateExpence();

  console.log(expence);
  return (
    <div>
      <div className="flex justify-end items-center">
        <Button variant={"default"}>Archive</Button>
      </div>
      <ModalPortal open={false}>
        <ConfirmationModal />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
