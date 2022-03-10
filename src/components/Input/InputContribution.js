import { useContext } from "react";
import classes from "./InputContribution.module.css";
import ResultsContext from '../../store/results-context';
import ComplexContext from "../../store/complex-context";

function InputContribution() {
   const resultsCtx =  useContext(ResultsContext);
   const complexCtx= useContext(ComplexContext);
    function setComplexTrueHandler(){
        complexCtx.setContributions();
        resultsCtx.setComplex(true);
    }
    function setComplexFalseHandler(){
        resultsCtx.setComplex(false);
    }
  return (
    <div className={classes.contributionActions}>
    <span className={classes.tooltiptext}>Switch Between Salary Based Contribution and Simple Based Contribution</span>
      <button className={classes.contribution} onClick={setComplexTrueHandler}>Complex Contribution</button>
      <button className={classes.contribution} onClick={setComplexFalseHandler}>Simple Contribution</button>
    </div>
  );
}

export default InputContribution;
