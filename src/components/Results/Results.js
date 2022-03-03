import classes from "./Results.module.css";
import ResultsHeader from "./ResultsHeader";
import ResultsData from "./ResultsData";
function Results() {
  return (
    <div className={classes.results}>
      <ResultsHeader />
      <div className={classes.wrapper}>
        <ResultsData />
      </div>
    </div>
  );
}

export default Results;
