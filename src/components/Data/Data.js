import classes from "./Data.module.css";
import Input from "../Input/Input";
import Graph from "../Graph/Graph";
import Results from "../Results/Results";
import React from "react";
import { useState, Fragment } from "react";
function Data() {
  const [showOverlay, setShowOverlay] = useState(false);
  function showOverlayHandler() {
    setShowOverlay(!showOverlay);
  }
  return (
    <Fragment>
      {showOverlay && (
        <div className={classes.overlay} onClick={showOverlayHandler}>
        </div>
      )}
      <div className={classes.holder}>
        <div className={classes.inputResults}>
          <Input showOverlay={showOverlayHandler} />
          <Results />
        </div>
        <Graph />
      </div>
    </Fragment>
  );
}

export default Data;
