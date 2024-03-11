// import useCreateExpence from "../hooks/useCreateExpence";
// import useUserInfo from "../hooks/useUserInfo";
// import { useEffect } from "react";
import useGetExpence from "../hooks/useGetExpence";

const Dashboard = () => {
  // const { data: userInfo } = useUserInfo();
  const { data: expence } = useGetExpence("8758789147");

  // const { mutate: CreateExpence } = useCreateExpence();

  console.log(expence);
  return (
    <div>
      <button type="submit">Click me</button>
    </div>
  );
};

export default Dashboard;
