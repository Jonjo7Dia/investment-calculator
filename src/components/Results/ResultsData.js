import classes from "./ResultsData.module.css";
import { useContext } from "react";
import ResultsContext from '../../store/results-context';
function ResultsData() {
    const resultsCtx = useContext(ResultsContext);
    const data = resultsCtx.results;
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
  return (
    <div className={classes.resultsData}>
      <div className={classes.labels}>
        <ul>
          <li>Starting Amount</li>
          <li>Total Contributions</li>
          <li>Total Interest</li>
          <li>End Balance</li>
        </ul>
      </div>
      <div className={classes.numbers}>
        <ul>
          <li>${numberWithCommas(data.startingAmount.toFixed(2))}</li>
          <li>${numberWithCommas(data.totalContributions.toFixed(2))}</li>
          <li>${numberWithCommas(data.totalInterest.toFixed(2))}</li>
          <li>${numberWithCommas(data.endBalance.toFixed(2))}</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultsData;
