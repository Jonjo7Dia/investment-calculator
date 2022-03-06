import classes from './ResultsTable.module.css';
import ResultsTableHeader from './ResultsTableHeader';
import Result from './Result';
function ResultsTable(){
    return <div className={classes.resultsTable}>
        <ResultsTableHeader />
        <Result />
    </div>
}

export default ResultsTable;