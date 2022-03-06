import { useReducer } from "react";
import ComplexContext from "./complex-context";

const defaultComplexState = {
  startingSalary: 30000,
  endSalary: 50000,
  contributionPercentage: 20.0,
  growthTime: 10,
  growthRate: 1,
  growthPeriod: 1,
  contributions: [],
};

const complexReducer = (state, action) => {
  if (action.type === "SETSTART") {
    return { ...state, startingSalary: action.payload };
  }
  if (action.type === "SETEND") {
    return { ...state, endSalary: action.payload };
  }
  if (action.type === "SETPERCENTAGE") {
    return { ...state, contributionPercentage: action.payload };
  }
  if (action.type === "SETTIME") {
    return { ...state, growthTime: action.payload };
  }
  if (action.type === "SETRATE") {
    return { ...state, growthRate: action.payload };
  }
  if (action.type === "SETPERIOD") {
    return { ...state, growthPeriod: action.payload };
  }
  if (action.type === "SETCONTRIBUTION") {
    return {
      ...state,
      contributions: action.payload,
    };
  }
};

const ComplexProvider = (props) => {
  const [complexState, dispatchComplexAction] = useReducer(
    complexReducer,
    defaultComplexState
  );
  const setStartingSalaryHandler = (amount) => {
    dispatchComplexAction({
      type: "SETSTART",
      payload: amount,
    });
  };
  const setEndSalaryHandler = (amount) => {
    dispatchComplexAction({
      type: "SETEND",
      payload: amount,
    });
  };
  const setPercentageHandler = (amount) => {
    dispatchComplexAction({
      type: "SETPERCENTAGE",
      payload: amount,
    });
  };
  const setTimeHandler = (amount) => {
    dispatchComplexAction({
      type: "SETTIME",
      payload: amount,
    });
  };
  const setRateHandler = (amount) => {
    dispatchComplexAction({
      type: "SETRATE",
      payload: amount,
    });
  };
  const setPeriodHandler = (amount) => {
    dispatchComplexAction({
      type: "SETPERIOD",
      payload: amount,
    });
  };

  const complexContext = {
    startingSalary: complexState.startingSalary,
    endSalary: complexState.startingSalary,
    contributionPercentage: complexState.contributionPercentage,
    growthTime: complexState.growthTime,
    growthRate: complexState.growthRate,
    growthPeriod: complexState.growthPeriod,
    contributions: complexState.contributions,
    setStartingSalary: setStartingSalaryHandler,
    setEndSalary: setEndSalaryHandler,
    setPercentage: setPeriodHandler,
    setGrowthTime: setTimeHandler,
    setGrowthRate: setRateHandler,
    setGrowthPeriod: setPeriodHandler,
  };

  return (
    <ComplexContext.Provider value={complexContext}>
      {props.children}
    </ComplexContext.Provider>
  );
};

export default ComplexProvider;
