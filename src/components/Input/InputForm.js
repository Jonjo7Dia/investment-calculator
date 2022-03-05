import classes from "./InputForm.module.css";
import InputField from "./InputField";
import InputsContext from "../../store/inputs-context";
import { useContext } from "react";
import ResultsContext from '../../store/results-context';
function InputForm(props) {
  const inputCtx = useContext(InputsContext);
  const resultsCtx = useContext(ResultsContext);
  function startingAmountHandler(event) {
    inputCtx.setStartingAmount(Math.floor(event.target.value));
  }
  function afterHandler(event){
      inputCtx.setAfter(Math.floor(event.target.value));
  }
  function returnRateHandler(event){
      inputCtx.setReturn(Math.floor(event.target.value));
  }
  function compoundHandler(event){
      inputCtx.setCompound(Math.floor(event.target.value));
  }
  function contributionHandler(event){
      inputCtx.setContribution(Math.floor(event.target.value))
  }
  function periodHandler(event){
      inputCtx.setWhen(event.target.value);
  }
  function timeHandler (event){
      inputCtx.setTime(event.target.value);
  }

  resultsCtx.setResults();
  return (
    <form
      action=""
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputField label="Starting Amount ($)">
        <div className={classes.startingAmount}>
          <input
            type="number"
            value={inputCtx.startingAmount}
            step={1000}
            onChange={startingAmountHandler}
          />
        </div>
      </InputField>
      <InputField label="After (Years)">
        <div className={classes.startingAmount}>
          <input type="number" value={inputCtx.after} min={0} onChange={afterHandler} />
        </div>
      </InputField>
      <InputField label="Return Rate (%)">
        <div className={classes.startingAmount}>
          <input type="number" value={inputCtx.returnRate} onChange={returnRateHandler} />
        </div>
      </InputField>
      <InputField label="Compound">
        <div className={classes.startingAmount}>
          <select
            name="Compound"
            id="compound"
            defaultValue={inputCtx.compound}
            onChange={compoundHandler}
          >
            <option value={1}>Annually</option>
            <option value={2}>Semi-Annually</option>
            <option value={4}>Quartely</option>
            <option value={6}>Bi-Monthly</option>
            <option value={12}>Monthly</option>
            <option value={24}>Semi-Monthly</option>
           
            <option value={52}>Weekly</option>
            <option value={365}>Daily</option>
          </select>
        </div>
      </InputField>
      <InputField label="Additional Contribution">
        <div
          className={(classes.startingAmount, classes.additionalContributions)}
        >
          <button onClick={props.showOverlay}>Complex</button>
          <input
            type="number"
            defaultValue={inputCtx.additionalContribution}
            onChange={contributionHandler}
          />
        </div>
      </InputField>
      <InputField label="Contribute Period">
        <div className={classes.period}>
          <select
            name="when"
            id="when"
            className={classes.timing}
            defaultValue={inputCtx.when}
            onChange={periodHandler}
          >
            <option value="Beginning">Beginning</option>
            <option value="End">End</option>
          </select>
          <span>Of</span>
          <select
            name="time"
            id="time"
            className={classes.timing}
            defaultValue={inputCtx.time}
            onChange={timeHandler}
          >
            <option value={12}>Month</option>
            <option value={1}>Year </option>
          </select>
        </div>
      </InputField>
    </form>
  );
}

export default InputForm;
