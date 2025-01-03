import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["India", "USA", "Brazil", "Other"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "#4a5369",
        "#58647e",
       "#4a5369",
        "#353b4b"
      
      ],
      borderColor: [
        "#4a5369",
        "#58647e",
        "#4a5369",
       "#353b4b"
     
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <Doughnut
      data={data}
      options={{ plugins: { legend: { display: false } } }}
    />
  );
}
