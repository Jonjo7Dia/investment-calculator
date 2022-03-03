import classes from './Input.module.css';
import InputForm from './InputForm';
function Input() {

    return <div className={classes.input}>
        <div className={classes.wrapper}>
            <InputForm />
        </div>
    </div>
}

export default Input;