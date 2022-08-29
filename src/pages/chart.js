// import React from "react";
// import Chart from 'chart.js/auto';
// import { Line } from "react-chartjs-2";

// let tunde = "67"
// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "Transactions",
//       data: [tunde, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "#ecfcf1",
//       borderColor: "#09781a"
//     }
//   ]
// };

// export default function Charting() {
//   return (
//     <div>
//       <Line data={data} />
//     </div>
//   );
// }



import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Amount"],
  ["0", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];

export const options = {
  title: "Total Transactions",
  curveType: "function",
  legend: { position: "bottom" },
};

export function Charting() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
