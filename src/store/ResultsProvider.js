import { useContext, useReducer } from "react";
import ResultsContext from "./results-context";
import InputsContext from './inputs-context';



const defaultResultsState = {
  complexSelected: false,
  complexMonthlyContributions: [],
  data: {},
  results: [],
};
const beginningInterest = (principal, rate, t) =>{
    let r = rate/100;
    let total = principal * ((1+r/t)**(t/12));
    return Number(( total - principal).toFixed(3));
}

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
  const setResultsHandler = () =>{
     
    if(resultsState.complexSelected){
        console.log('complex selected');
    }
    else {
        let data = inputsCtx;
        let holder = [];
        let r  = parseFloat(data.returnRate);
        let t = data.compound;
        let contribution = data.additionalContribution;
        let principal = data.startingAmount;
        let item;

        if(data.when === 'Beginning'){
            for (let x = 0; x <  data.after * 12; x ++ ){
                if (x=== 0){
                    item = {
                        principal: principal,
                        contribution: contribution,
                        startBalance: principal + contribution,
                        interest: beginningInterest((principal + contribution), r, t),
                        endBalance: beginningInterest((principal + contribution), r, t) + principal + contribution,
                        endPrincipal: principal + contribution,
                    }
                    holder.push(item);
                    principal = holder[0].endPrincipal;
                }
                else {
                    item = {
                        principal: principal,
                        contribution: contribution,
                        startBalance: holder[x-1].endBalance + contribution,
                        interest: beginningInterest(holder[x-1].endBalance + contribution, r, t),
                        endBalance: beginningInterest(holder[x-1].endBalance + contribution, r, t) + Number(holder[x-1].endBalance + contribution),
                        endPrincipal: principal + contribution,
                    }
                    holder.push(item);
                    principal = holder[x].endPrincipal;
                }
            }
            resultsState.results = holder;
 
            
        }
    }
  }

  

  const resultsContext = {
    complexSelected: resultsState.complexSelected,
    complexMonthlyContributions: resultsState.complexMonthlyContributions,
    data: inputsCtx,
    results: resultsState.results,
    setData: setDataHandler,
    setMonthly: setMonthlyHandler,
    setComplex: setComplexHandler,
    setResults: setResultsHandler
  };

  return (
    <ResultsContext.Provider value={resultsContext}>
      {props.children}
    </ResultsContext.Provider>
  );
};
export default ResultsProvider;
