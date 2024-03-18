ChartJS.register(ArcElement, Tooltip, Legend);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Button } from "../../../shared/components/common-button/Button";
import ModalPortal from "../../../shared/components/modal-portal/ModalPortal";
import ExpenceDataListing from "./ExpenceDataListing";
import useGetExpence from "../hooks/useGetExpence";
import useArchiveExpence from "../hooks/useArchiveExpence";
import ExpenceAddEditModal from "./ExpenceAddEditModal";
import { Pie } from "react-chartjs-2";

const Dashboard = () => {
  const [createOpenModel, setcreateOpenModel] = useState(false);
  const [editData, setEditData] = useState(null);
  const [isEdit, setisEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: expence,
    isLoading,
    isFetching,
    refetch,
  } = useGetExpence(pageIndex);
  const { mutate: DeleteExpences } = useArchiveExpence(refetch);

  const onclickCreate = () => {
    setcreateOpenModel(!createOpenModel);
    setisEdit(false);
    setEditData(null);
  };

  const bgColor = [
    "#1C64F2",
    "#FDBA8C",
    "#16BDCA",
    "#D61F69",
    "#5850EC",
    "#9061F9",
    "#F838C2",
    "#FF8309",
  ];

  const values = expence && Object.values(expence?.expence_data); // Assuming `values` is a function that extracts values from an object
  // const key = Object.keys(sortData); // Assuming `keys` is a function that extracts keys from an object

  const data = {
    datasets: [
      {
        data: values,
        borderWidth: 1,
        backgroundColor: bgColor,
      },
    ],
  };

  const chartOptions = {
    cutoutPercentage: 60,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-end items-center mb-3">
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
      <Pie data={data} options={chartOptions} />

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
