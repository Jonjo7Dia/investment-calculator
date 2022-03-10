import classes from "./ResultsTableHeader.module.css";

function ResultsTableHeader(props){
    

 return <div className={classes.resultsTableHeader}>
     <ul>
         <li key={'month'} className={classes.month}>{props.title}</li>
         <li key={'principal'} className={classes.bigValue}>Start Principal</li>
         <li key={'cont'} className={classes.smallValue}>Contribution</li>
         <li key={'sBal'} className={classes.bigValue}>Start Balance</li>
         <li key={'int'} className={classes.smallValue}>Interest</li>
         <li key={'eBal'} className={classes.bigValue}>End Balance</li>
         <li key={'endPr'} className={classes.bigValue}>End Principal</li>
     </ul>
 </div>
}

export default ResultsTableHeader;