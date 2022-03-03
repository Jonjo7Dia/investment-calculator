import classes from "./InputField.module.css";
function InputField(props) {
  return <div className={classes.inputField}>
      <div className={classes.label}><p>{props.label}</p></div>
      {props.children}
      </div>;
}
export default InputField;
