import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  //   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip
  //   Legend
);

export const options = {
  responsive: true,
  //   tension:2,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,

      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

function randomNumbersArray(length = 10) {
  return Array.from(Array(length), () => Math.random() * 0.5);
}
function DataCard({
  title,
  subTitle,
  value,
  percent,
  color,
  percent_backgroundColor,
  percent_borderColor,
}) {
  const data = {
    labels: randomNumbersArray(25),
    datasets: [
      {
        radius: 0,
        label: "Dataset 1",
        data: randomNumbersArray(25),
        borderColor: percent_borderColor,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Card
      className="data-card"
      variant="outlined"
      sx={{
        borderRadius: "10px",
        backgroundColor: "#05070a66",
        color: "white!important",
        border: "1px solid #303840",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "0.875rem",
            lineHeight: "1.57",
            marginBottom: "0.35em",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: "600", fontSize: "1.5rem", lineHeight: "1.5" }}
          >
            {value}
          </Typography>
          {/* <Badge color="secondary" badgeContent={percent} /> */}
          <Box
            sx={{
              color: color,
              display: "flex",
              alignItems: "center",
              border: `.5px solid ${percent_borderColor}`,
              borderRadius: "20px",
              padding: "0px 6px",
              height: "20px",
              fontSize: " 0.8125rem",
              fontWeight: "bold",
              backgroundColor: percent_backgroundColor,
            }}
          >
            {percent}
          </Box>
        </Box>

        <Typography
          sx={{
            marginBottom: "30px",
            fontWeight: "400",
            fontSize: "0.75rem",
            lineHeight: "1.66",
            color: "#94a0b8",
          }}
        >
          {subTitle}
        </Typography>
        <Line options={options} data={data} height={"25px"} />
      </CardContent>
    </Card>
  );
}

export default DataCard;
