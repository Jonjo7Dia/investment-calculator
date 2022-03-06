import classes from "./Data.module.css";
import Input from "../Input/Input";
import Graph from "../Graph/Graph";
import Results from "../Results/Results";
import ResultsTable from "../ResultsTable/ResultsTable";
import React, { useState, Fragment } from "react";
import Complex from "../Complex/Complex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Data() {
  const [showOverlay, setShowOverlay] = useState(false);
  function showOverlayHandler(event){
    setShowOverlay(!showOverlay);
    console.log(event.key);
  }
  
  return (
    <Fragment>
      {showOverlay && (
        <div className={classes.overlay}>
          <button className={classes.close} onClick={showOverlayHandler}>
            <FontAwesomeIcon icon={faXmark} className={classes.imageLogo} />
          </button>
          <Complex showOverlay={showOverlayHandler}/>
        </div>
      )}
      <div className={classes.holder}>
        <div className={classes.inputResults}>
          <Input showOverlay={showOverlayHandler} />
          <Results />
        </div>
        <Graph />
      </div>
      <ResultsTable />
    </Fragment>
  );
}

export default Data;
