import classes from "./ResultsData.module.css";
function ResultsData() {
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
          <li>$20,000.00</li>
          <li>$120,000.00</li>
          <li>$58,290.40</li>
          <li>$198,290.40</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultsData;
