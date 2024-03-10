import { useForm } from "react-hook-form";
import useCreateExpence from "../hooks/useCreateExpence";
import useUserInfo from "../hooks/useUserInfo";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: userInfo } = useUserInfo();
  const { mutate: CreateExpence } = useCreateExpence();
  const { handleSubmit, setValue } = useForm();

  useEffect(() => {
    // Set initial values based on API response
    if (userInfo) {


      setValue("expence_createdBy", userInfo?.data?.data.username);
      setValue("expence_title", userInfo?.data?.data.fullName);
      setValue("expence_type", userInfo?.data?.data.email);
      setValue("expence_category", userInfo?.data?.data.invite_link);
      setValue("expence_money", userInfo?.data?.data.invited);
    }
  }, [userInfo, setValue]);


  const onSubmit = (data) => {
    CreateExpence(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">Click me</button>
      </form>
    </div>
  );
};

export default Dashboard;
