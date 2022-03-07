import { useReducer, useContext, useEffect } from "react";
import ComplexContext from "./complex-context";
import InputsContext from "./inputs-context";
import ResultsContext from "./results-context";
const defaultComplexState = {
  startingSalary: 30000,
  endSalary: 50000,
  contributionPercentage: 20.0,
  growthTime: 10,
  growthRate: 1,
  growthPeriod: 1,
  contributions: [],
};
function findK(start, end, t, period) {
  let division = Number(start / end);
  let log = Math.log(division);
  let product = Number(t * period);
  return (-1 * log) / product;
}
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
};

const ComplexProvider = (props) => {
  const inputsCtx = useContext(InputsContext);
  const after = inputsCtx.after;
  const resultsCtx = useContext(ResultsContext);
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

  const setContributionsHandler = () => {
    let contPerc = complexState.contributionPercentage / 100;

    let holder = [];
    let k;
    k = findK(
      complexState.startingSalary,
      complexState.endSalary,
      complexState.growthTime,
      complexState.growthPeriod
    );
    let growthRate = complexState.growthRate;
    growthRate = Number(growthRate);
    let growthPeriod = complexState.growthPeriod;
    let difference = complexState.endSalary - complexState.startingSalary;
    let division = difference / (complexState.growthTime * growthPeriod);
    let salary = complexState.startingSalary;
    let monthlySalary = Number(complexState.startingSalary / 12);
    let cont;
    for (let x = 1; x <= complexState.growthTime * 12; x++) {
      if (x !== 1 && (x - 1) % (12 / growthPeriod) === 0) {
        if (growthRate === 2) {
          salary = salary * Math.E ** k;
        } else {
          salary = salary + division;
          monthlySalary = salary / 12;
          cont = monthlySalary * contPerc;
        }
      }
      if (growthRate === 1 ) {
        cont = (salary / 12) * contPerc;
      } else {
        cont = monthlySalary * contPerc;
      }
      holder.push(cont);
    }
    if (holder.length < (after) * 12) {
      let difference = (after)* 12 - holder.length;
      let storage = holder[holder.length - 1];
      for (let x = 0; x < difference; x++) {
        holder.push(storage);
      }
    }

    complexState.contributions = holder;
    resultsCtx.setMonthly(holder);
  };

  const complexContext = {
    startingSalary: complexState.startingSalary,
    endSalary: complexState.endSalary,
    contributionPercentage: complexState.contributionPercentage,
    growthTime: complexState.growthTime,
    growthRate: complexState.growthRate,
    growthPeriod: complexState.growthPeriod,
    contributions: complexState.contributions,
    setStartingSalary: setStartingSalaryHandler,
    setEndSalary: setEndSalaryHandler,
    setPercentage: setPercentageHandler,
    setGrowthTime: setTimeHandler,
    setGrowthRate: setRateHandler,
    setGrowthPeriod: setPeriodHandler,
    setContributions: setContributionsHandler,
  };

  return (
    <ComplexContext.Provider value={complexContext}>
      {props.children}
    </ComplexContext.Provider>
  );
};

export default ComplexProvider;
