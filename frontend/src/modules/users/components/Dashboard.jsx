// import useCreateExpence from "../hooks/useCreateExpence";
// import useUserInfo from "../hooks/useUserInfo";
// import { useEffect } from "react";
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
      <button type="submit">Click me</button>
      <ModalPortal open={false}>
        <ConfirmationModal />
      </ModalPortal>
    </div>
  );
};

export default Dashboard;
