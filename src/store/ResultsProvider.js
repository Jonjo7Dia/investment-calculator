import { useContext, useReducer } from "react";
import ResultsContext from "./results-context";
import InputsContext from './inputs-context';



const defaultResultsState = {
  complexSelected: false,
  complexMonthlyContributions: [],
  data: {},
  results: [],
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
  const setResultsHandler = () =>{
     
    if(resultsState.complexSelected){
        console.log('complex selected');
    }
    else {
        let data = inputsCtx;
        let holder = [];
        if(data.when === 'Beginning'){

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
