import classes from "./InputContribution.module.css";
function InputContribution() {
  return (
    <div className={classes.contributionActions}>
      <button className={classes.contribution}>Complex Contribution</button>
      <button className={classes.contribution}>Simple Contribution</button>
    </div>
  );
}

export default InputContribution;
