import classes from './Result.module.css';

function Result(){
    return <div className={classes.tableResult}>
        <div className={classes.month}><span>1</span></div>
        <div className={classes.bigValue}><span>$20,000.00</span></div>
        <div className={classes.smallValue}><span>$1,000</span></div>
        <div className={classes.bigValue}><span>$20,000.00</span></div>
        <div className={classes.smallValue}><span>$98.77</span></div>
        <div className={classes.bigValue}><span>$21,098.77	</span></div>
        <div className={classes.bigValue}><span>$21,000.00</span></div>


    </div>
}

export default Result;