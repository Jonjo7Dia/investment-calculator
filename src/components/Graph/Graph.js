import classes from "./Graph.module.css";
import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import ResultsContext from '../../store/results-context';
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

  const resultCtx = useContext(ResultsContext);
  const results = resultCtx.results.monthlyResults;
 
  let totalInterest = [0];
  let endBalance = [results[0].startBalance];
  let totalPrincipal = [results[0].principal];
  let interest = 0; 
  let xAxis = [' '];
  for (let x = 0; x < results.length; x++){
    interest = Number(results[x].interest) + interest;
    if ((x+1)%12 === 0 && x !==0 ){
      let item = results[x];
      let year = 'year ' + (x+1)/12;
      endBalance.push(Number(item.endBalance.toFixed(2)));

      totalInterest.push(Number(interest.toFixed(2)));
      totalPrincipal.push(Number(item.endPrincipal.toFixed(2)));
      xAxis.push(year);
    }
  }
  
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
            text: 'Total Earned In Investment Period'
        },

    },
   
  };
  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Total Balance",
        data: endBalance,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Total Principal",
        data: totalPrincipal,
        fill: false,
        borderColor: "#742774",
      },
      {
        label: "Total Interest",
        data: totalInterest,
        fill: false,
        borderColor: "#2BD355",
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
