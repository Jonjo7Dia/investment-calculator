import classes from "./ResultsTableHeader.module.css";

function ResultsTableHeader(){
 return <div className={classes.resultsTableHeader}>
     <ul>
         <li className={classes.month}>Month</li>
         <li className={classes.bigValue}>Principal</li>
         <li className={classes.smallValue}>Contribution</li>
         <li className={classes.bigValue}>Start Balance</li>
         <li className={classes.smallValue}>Interest</li>
         <li className={classes.bigValue}>End Balance</li>
         <li className={classes.bigValue}>End Principal</li>
     </ul>
 </div>
}

export default ResultsTableHeader;