import classes from './Complex.module.css';
import ComplexHeader from './ComplexHeader';
import ComplexBody from './ComplexBody';
import ComplexGrowth from './ComplexGrowth';

function Complex(props){
    return <div className={classes.complex}>
        <ComplexHeader />
        
        <ComplexBody />
        <div className={classes.growthHeader}>
        <h3>SALARY GROWTH</h3>
      </div>
      <div className={classes.complexActions}>
          <ComplexGrowth showOverlay={props.showOverlay} />
      </div>
    </div>
}

export default Complex;