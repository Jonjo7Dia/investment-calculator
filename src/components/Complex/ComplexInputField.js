import classes from "./ComplexInputField.module.css";
function ComplexInputField(props) {
  return <div className={classes.complexInputField}>
      <div className={classes.label}><p>{props.label}</p></div>
      {props.children}
      </div>;
}
export default ComplexInputField;