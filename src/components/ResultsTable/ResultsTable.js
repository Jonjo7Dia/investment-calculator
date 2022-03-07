import classes from "./ResultsTable.module.css";
import ResultsTableHeader from "./ResultsTableHeader";
import Result from "./Result";
import { useContext, useState } from "react";
import ResultsContext from "../../store/results-context";
import YearBreak from "./YearBreak";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
function ResultsTable() {

  const [showYear, setShowYear] = useState(true);
  let year;
  const resultCtx = useContext(ResultsContext);
  const data = resultCtx.results.monthlyResults;
  const showMonthHandler = () => {
    setShowYear(!showYear);
  };
  let content = [];
  let yearcounter = 0;
  let totalInterest = 0;
  if (!showYear) {
      year = 'Month';
    for (let x = 0; x < data.length; x++) {
      let item = data[x];
      if (x % 12 === 0 && x > 0) {
        yearcounter++;
        content.push(<YearBreak year={yearcounter}  key={'yr'+ yearcounter}/>);
        content.push(
          <Result
            key={item.id}
            id={item.id}
            principal={item.principal}
            contribution={item.contribution}
            startBalance={item.startBalance}
            interest={item.interest}
            endBalance={item.endBalance}
            endPrincipal={item.endPrincipal}
          />
        );
      } else if (x === data.length - 1) {
        yearcounter++;
        content.push(<YearBreak year={yearcounter}  key={'yr'+ yearcounter}/>);
      } else {
        content.push(
          <Result
            key={item.id}
            id={item.id}
            principal={item.principal}
            contribution={item.contribution}
            startBalance={item.startBalance}
            interest={item.interest}
            endBalance={item.endBalance}
            endPrincipal={item.endPrincipal}
          />
        );
      }
    }
  } else {
      year = 'Year';
    for (let x = 0; x < data.length; x++) {
        let item = data[x];
        totalInterest = item.interest + totalInterest;

      if ((x) % 12 === 0 && x !== 0) {
       
        yearcounter++;
        content.push(
          <Result
            key={item.id}
            id={yearcounter - 1}
            principal={item.principal}
            contribution={item.contribution}
            startBalance={item.startBalance}
            interest={totalInterest}
            endBalance={item.endBalance}
            endPrincipal={item.endPrincipal}
          />
        );
        totalInterest = 0;
      }
      else if (x === data.length -1){

        yearcounter++;
        content.push(
          <Result
            key={item.id}
            id={yearcounter - 1}
            principal={item.principal}
            contribution={item.contribution}
            startBalance={item.startBalance}
            interest={totalInterest}
            endBalance={item.endBalance}
            endPrincipal={item.endPrincipal}
          />
        );
        totalInterest = 0;
      }
    }
  }
  

  return (
    <div className={classes.holder}>
      <div className={classes.switch} onClick={showMonthHandler}>
        <FontAwesomeIcon icon={faRepeat} className={classes.imageLogo} />
        Show {showYear? 'Monthly' : 'Yearly'} Break Down
        <FontAwesomeIcon icon={faRepeat} className={classes.imageLogo} />
      </div>
      <div className={classes.resultsTable}>
        <ResultsTableHeader title={year}/>
        {content}
      </div>
    </div>
  );
}

export default ResultsTable;
