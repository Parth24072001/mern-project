ChartJS.register(ArcElement, Tooltip, Legend);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const Graphs = ({ expence }) => {
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

  const values = expence && Object.values(expence?.expence_data);
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
      <Pie data={data} options={chartOptions} />
    </div>
  );
};

export default Graphs;
