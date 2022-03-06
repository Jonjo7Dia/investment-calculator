import classes from "./Data.module.css";
import Input from "../Input/Input";
import Graph from "../Graph/Graph";
import Results from "../Results/Results";
import ResultsTable from '../ResultsTable/ResultsTable';
import React, { useState, Fragment } from "react";

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
      <ResultsTable />
    </Fragment>
  );
}

export default Data;
