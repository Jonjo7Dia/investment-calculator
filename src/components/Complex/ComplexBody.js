import classes from "./ComplexBody.module.css";

import ComplexInputField from "./ComplexInputField";

function ComplexBody() {
  return (
    <div className={classes.complexBody}>
      <div className={classes.complexInputs}>
        <ComplexInputField label={"Starting Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={30000} step={1000} />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"End Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={50000} step={1000} />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Contribution Percentage (%)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={20.0} step={0.1} />
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Growth Time (Years)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={10} step={1} />
          </div>
        </ComplexInputField>
      </div>
    
    </div>
  );
}
export default ComplexBody;
