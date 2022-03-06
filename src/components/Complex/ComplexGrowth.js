import classes from "./ComplexGrowth.module.css";


function ComplexGrowth(props) {
  return (
    <div className={classes.complexGrowth}>
      <div className={classes.growthInputs}>
        <div className={classes.growthInput}>
          <div className={classes.growthLabel}><p>Growth Rate</p></div>
          <div className={classes.growthValue}>
          <select
            name="growthRate"
            id="growthRate"
            defaultValue={1}
          >
            <option value={1}>Average</option>
            <option value={2}>Exponential</option>
          </select>
          </div>
        </div>
        <div className={classes.growthInput}>
          <div className={classes.growthLabel}><p>Growth Period</p></div>
          <div className={classes.growthValue}>
          <select
            name="growthPeriod"
            id="growthPeriod"
            defaultValue={1}
          >
            <option value={1}>Yearly</option>
            <option value={2}>Semi-Annually</option>
            <option value={3}>Monthly</option>
          </select>
          </div>
        </div>
        <div className={classes.growthInput}>
            <button onClick={props.showOverlay}>Use Salary Based Contribution</button></div>
      </div>
    </div>
  );
}

export default ComplexGrowth;
