import classes from './Input.module.css';
import InputForm from './InputForm';
function Input(props) {

    return <div className={classes.input}>
        <div className={classes.wrapper}>
            <InputForm showOverlay={props.showOverlay}/>
        </div>
    </div>
}

export default Input;