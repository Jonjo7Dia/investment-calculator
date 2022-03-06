import classes from './YearBreak.module.css';

function YearBreak(props){

    return <div className={classes.yearBreak}>
        <span>Year {props.year} End</span>
    </div>
}

export default YearBreak;