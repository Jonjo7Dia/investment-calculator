import classes from './Input.module.css';
import InputForm from './InputForm';
import InputHeader from './InputHeader'
function Input(props) {

    return <div className={classes.input}>
        <InputHeader />
        <div className={classes.wrapper}>
            <InputForm showOverlay={props.showOverlay}/>
        </div>
    </div>
}

export default Input;