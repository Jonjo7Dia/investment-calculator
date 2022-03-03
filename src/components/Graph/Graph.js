import classes from "./Graph.module.css";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph() {
  const options = {
    maintainAspectRatio: false,
    tension: 0.4,
      plugins: {
        subtitle: {
            position: 'bottom',
            display: true,
            text: 'Custom Chart Subtitle'
        },
        title: {
            display: true,
            text: 'Custom Chart Title'
        },

    },
   
  };
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <div className={classes.graph}>
      <Line options={options} data={data} />
    </div>
  );
}

export default Graph;
