import classes from "./ComplexBody.module.css";
import ComplexInputField from "./ComplexInputField";
import ComplexContext from "../../store/complex-context";

import { useContext } from "react";

function ComplexBody() {
  const complexCtx = useContext(ComplexContext);
  function startingHandler(event) {
    if (event.target.value > 0 && event.target.value < 100000000) {
      complexCtx.setStartingSalary(Number(event.target.value));
      complexCtx.setContributions();
    }
  }
  function endHandler(event) {
    if (event.target.value > 0 && event.target.value < 100000000) {
      complexCtx.setEndSalary(Number(event.target.value));
      complexCtx.setContributions();
    }
  }
  function percentageHandler(event) {
    if (event.target.value > 0 && event.target.value <= 100) {
      complexCtx.setPercentage(event.target.value);
      complexCtx.setContributions();
    }
  }
  function timeHandler(event) {
    let value = Number(event.target.value);
    if (value > 0 && value <= 100) {
      complexCtx.setGrowthTime(value);
      complexCtx.setContributions();
    }
  }

  return (
    <div className={classes.complexBody}>
      <div className={classes.complexInputs}>
        <ComplexInputField label={"Starting Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input
              type="number"
              value={complexCtx.startingSalary}
              step={1000}
              onChange={startingHandler}
            />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"End Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input
              type="number"
              value={complexCtx.endSalary}
              step={1000}
              onChange={endHandler}
            />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Contribution Percentage (%)"}>
          <div className={classes.complexInput}>
            <input
              type="number"
              value={complexCtx.contributionPercentage}
              step={0.1}
              onChange={percentageHandler}
            />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Growth Time (Years)"}>
          <div className={classes.complexInput}>
            <input
              type="number"
              defaultValue={Number(complexCtx.growthTime)}
              max={100}
              min={1}
              step={1}
              onChange={timeHandler}
            />
          </div>
        </ComplexInputField>
      </div>
    </div>
  );
}
export default ComplexBody;
