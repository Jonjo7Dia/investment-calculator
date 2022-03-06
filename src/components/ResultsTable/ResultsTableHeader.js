import classes from "./ResultsTableHeader.module.css";

function ResultsTableHeader(){
 return <div className={classes.resultsTableHeader}>
     <ul>
         <li>Month</li>
         <li>Principal</li>
         <li>Contribution</li>
         <li>Start Balance</li>
         <li>Interest</li>
         <li>End Balance</li>
         <li>End Principal</li>
     </ul>
 </div>
}

export default ResultsTableHeader;