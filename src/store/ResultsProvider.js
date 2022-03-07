import { useContext, useReducer } from "react";
import ResultsContext from "./results-context";
import InputsContext from "./inputs-context";
import { _adapters } from "chart.js";

const defaultResultsState = {
  complexSelected: false,
  complexMonthlyContributions: [],
  data: {},
  results: {
    monthlyResults: [],
    totalContributions: 0,
    totalInterest: 0,
    startingAmount: 0,
    endBalance: 0,
  },
};
const beginningInterest = (principal, rate, t) => {
  let r = rate / 100;
  let total = principal * (1 + r / t) ** (t / 12);
  return Number((total - principal).toFixed(3));
};
const endInterest = (principal, rate, t) => {
  let r = rate / 100;
  return Number(principal * ((1 + r / t) ** (t / 12) - 1));
};

const resultsReducer = (state, action) => {
  if (action.type === "SETDATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === "SETCOMPLEX") {
    return {
      ...state,
      complexSelected: action.payload,
    };
  }
  if (action.type === "SETMONTHLY") {
    return {
      ...state,
      complexMonthlyContributions: action.payload,
    };
  }
  
};

const ResultsProvider = (props) => {
  const inputsCtx = useContext(InputsContext);

  const [resultsState, dispatchResultsAction] = useReducer(
    resultsReducer,
    defaultResultsState
  );

  const setDataHandler = (userInput) => {
    dispatchResultsAction({
      type: "SETDATA",
      payload: userInput,
    });
  };
  const setMonthlyHandler = (userInput) => {
    dispatchResultsAction({
      type: "SETMONTHLY",
      payload: userInput,
    });
  };
  const setComplexHandler = (userInput) => {
    dispatchResultsAction({ type: "SETCOMPLEX", payload: userInput });

  }; 
  
  const setResultsHandler = () => {
    if (resultsState.complexSelected) {
      console.log(resultsState.complexMonthlyContributions)
      
    } else {
      let data = inputsCtx;
      let holder = [];
      let r = parseFloat(data.returnRate);
      let t = data.compound;
      let contribution = 0;
      let principal = data.startingAmount;
      let item;
      let totalI = 0;
      let totalC = 0;
      if (data.time === 12) {
        contribution = data.additionalContribution;
      } else {
        contribution = 0;
      }

      if (data.when === "Beginning") {
        for (let x = 0; x < data.after * 12; x++) {
          if (x === 0) {
            contribution = data.additionalContribution;
            item = {
              id: x,
              principal: principal,
              contribution: contribution,
              startBalance: principal + contribution,
              interest: beginningInterest(principal + contribution, r, t),
              endBalance:
                beginningInterest(principal + contribution, r, t) +
                principal +
                contribution,
              endPrincipal: principal + contribution,
            };
            holder.push(item);
            principal = holder[0].endPrincipal;
          } else {
            if (Number(data.time) === 1) {
              if ((x + 1) % 12 === 1 && x !== 1) {
                contribution = data.additionalContribution;
              } else {
                contribution = 0;
              }
            } else {
              contribution = data.additionalContribution;
            }

            item = {
              id: x,
              principal: principal,
              contribution: contribution,
              startBalance: holder[x - 1].endBalance + contribution,
              interest: beginningInterest(
                holder[x - 1].endBalance + contribution,
                r,
                t
              ),
              endBalance:
                beginningInterest(
                  holder[x - 1].endBalance + contribution,
                  r,
                  t
                ) + Number(holder[x - 1].endBalance + contribution),
              endPrincipal: principal + contribution,
            };
            holder.push(item);
            principal = holder[x].endPrincipal;
          }
          totalI = totalI + holder[x].interest;
          totalC = totalC + holder[x].contribution;
        }
        resultsState.results.monthlyResults = holder;
        resultsState.results.totalInterest = totalI;
        resultsState.results.totalContributions = totalC;
      } else if (data.when === "End") {
        for (let x = 0; x < data.after * 12; x++) {
          if (Number(data.time) === 1) {
            if ((x + 1) % 12 !== 0) {
              contribution = 0;
            } else {
              contribution = data.additionalContribution;
            }
          } else if (Number(data.time) === 12) {
            contribution = data.additionalContribution;
          }
          if (x === 0) {
            item = {
              id: x,
              principal: principal,
              contribution: contribution,
              startBalance: principal,
              interest: endInterest(principal, r, t),
              endBalance:
                endInterest(principal, r, t) + contribution + principal,
              endPrincipal: principal + contribution,
            };
          } else {
            item = {
              id: x,
              principal: holder[x - 1].endPrincipal,
              contribution: contribution,
              startBalance: holder[x - 1].endBalance,
              interest: endInterest(holder[x - 1].endBalance, r, t),
              endBalance:
                endInterest(holder[x - 1].endBalance, r, t) +
                holder[x - 1].endBalance +
                contribution,
              endPrincipal: holder[x - 1].endPrincipal + contribution,
            };
          }
          holder.push(item);
          totalI = holder[x].interest + totalI;
          totalC = holder[x].contribution + totalC;
          principal = holder[x].endBalance;
        }
        resultsState.results.monthlyResults = holder;
        resultsState.results.totalInterest = totalI;
        resultsState.results.totalContributions = totalC;
      }
    }
    resultsState.results.startingAmount = inputsCtx.startingAmount;
    resultsState.results.endBalance =
      resultsState.results.monthlyResults[inputsCtx.after * 12 - 1].endBalance;
  };

  const resultsContext = {
    complexSelected: resultsState.complexSelected,
    complexMonthlyContributions: resultsState.complexMonthlyContributions,
    data: inputsCtx,
    results: resultsState.results,
    setData: setDataHandler,
    setMonthly: setMonthlyHandler,
    setComplex: setComplexHandler,
    setResults: setResultsHandler,
  
  };

  return (
    <ResultsContext.Provider value={resultsContext}>
      {props.children}
    </ResultsContext.Provider>
  );
};
export default ResultsProvider;
