import classes from "./Data.module.css";
import Input from "../Input/Input";
import Graph from '../Graph/Graph';
import Results from '../Results/Results';
function Data() {
  return (
    <div className={classes.holder}>
      <div className={classes.inputResults}>
        <Input />
        <Results />
      </div>
      <Graph />
    </div>
  );
}

export default Data;
