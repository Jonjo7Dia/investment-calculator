import classes from "./ComplexBody.module.css";
import ComplexInputField from "./ComplexInputField";
import ComplexContext from "../../store/complex-context";
import { useContext } from "react";

function ComplexBody() {
    const complexCtx = useContext(ComplexContext);
    function startingHandler(event){
        if (event.target.value > 0 && event.target.value < 100000000){
            complexCtx.setStartingSalary(event.target.value);
        }
    };
    function endHandler(event){
        if (event.target.value > 0 && event.target.value < 100000000){
            complexCtx.setEndSalary(event.target.value);
        }
    };
    function percentageHandler(event){
        if(event.target.value > 0 && event.target.value <= 100){
            complexCtx.setPercentage(event.target.value);
        }
    }
    function timeHandler(event){
        if(event.target.value > 0){
            complexCtx.setGrowthTime(event.target.value);
        }
    }

    
  return (
    <div className={classes.complexBody}>
      <div className={classes.complexInputs}>
        <ComplexInputField label={"Starting Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={complexCtx.startingSalary} step={1000} onChange={startingHandler}/>
          </div>
        </ComplexInputField>
        <ComplexInputField label={"End Salary $ (Per Year)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={50000} step={1000} onChange={endHandler}/>
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Contribution Percentage (%)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={20.0} step={0.1} onChange={percentageHandler}/>
          </div>
        </ComplexInputField>
        <ComplexInputField label={"Growth Time (Years)"}>
          <div className={classes.complexInput}>
            <input type="number" defaultValue={10} step={1}onChange={timeHandler} />
          </div>
        </ComplexInputField>
      </div>
    
    </div>
  );
}
export default ComplexBody;
