import classes from "./InputForm.module.css";
import InputField from "./InputField";
function InputForm() {
  return (
    <form action="" className={classes.form}>
      <InputField label="Starting Amount ($)">
        <div className={classes.startingAmount}>
          <input type="number" placeholder={20000} step={1000} />
        </div>
      </InputField>
      <InputField label="After (Years)">
        <div className={classes.startingAmount}>
          <input type="number" placeholder={10} />
        </div>
      </InputField>
      <InputField label="Return Rate (%)">
        <div className={classes.startingAmount}>
          <input type="number" placeholder={6} />
        </div>
      </InputField>
      <InputField label="Compound">
        <div className={classes.startingAmount}>
          <select name="Compound" id="compound">
            <option value="Annually">Annually</option>
            <option value="Semi-Annually">Semi-Annually</option>
            <option value="Quartely">Quartely</option>
            <option value="Monthly">Monthly</option>
            <option value="Semi-Monthly">Semi-Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
      </InputField>
      <InputField label="Additional Contribution">
        <div className={classes.startingAmount}>
          <input type="number" placeholder={2000} />
        </div>
      </InputField>
      <InputField label="Contribute Period">
        <div className={classes.period}>
          <select name="when" id="when" className={classes.timing}>
            <option value="beginning">Beginning</option>
            <option value="end">End</option>
          </select>
          <span>Of</span>
          <select name="time" id="time" className={classes.timing}>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </InputField>
    </form>
  );
}

export default InputForm;
