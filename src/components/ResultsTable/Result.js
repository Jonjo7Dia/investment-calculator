import classes from './Result.module.css';

function Result(props){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
      let backClr; 
      if (props.id%2 === 1){
          backClr = classes.tableResultClr;
      }
      else {
          backClr = classes.tableResult;
      }

      let decimal = 2;

    return <div className={backClr} key={props.id}>
        <div className={classes.month}><span>{props.id + 1}</span></div>
        <div className={classes.bigValue}><span>${numberWithCommas((props.principal).toFixed(decimal))}</span></div>
        <div className={classes.smallValue}><span>${numberWithCommas((props.contribution).toFixed(decimal))}</span></div>
        <div className={classes.bigValue}><span>${numberWithCommas((props.startBalance).toFixed(decimal))}</span></div>
        <div className={classes.smallValue}><span>${numberWithCommas((props.interest).toFixed(decimal))}</span></div>
        <div className={classes.bigValue}><span>${numberWithCommas((props.endBalance).toFixed(decimal))}	</span></div>
        <div className={classes.bigValue}><span>${numberWithCommas((props.endPrincipal).toFixed(decimal))}</span></div>


    </div>
}

export default Result;