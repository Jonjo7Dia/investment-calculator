import { useReducer } from "react";
import InputsContext from "./inputs-context";

function monthRate(interest) {
  let monthlyRate = ((1 +(interest/100)) ** (1 / 12)) - 1;
  return monthlyRate;
}

const defaultInputsState = {
  startingAmount: 20000,
  after: 10,
  returnRate: 6.0,
  monthlyRate: monthRate(6),
  compound: 1,
  additionalContribution: 1000,
  when: "Beginning",
  time: 12,
};

const inputsReducer = (state, action) => {
  if (action.type === "SETAMOUNT") {
    return {...state, startingAmount: action.payload};
  }
  if (action.type === "SETAFTER") {
    return {...state, after: action.payload};
  }
  if (action.type === "SETRATE") {
    return {...state, returnRate: action.payload, monthlyRate: monthRate(action.payload)};
  }
  if (action.type === "SETCOMPOUND") {
   return {...state, compound: action.payload};
  }
  if (action.type === "SETCONTRIBUTION") {
    return {...state, additionalContribution: action.payload};
  }
  if (action.type === "SETWHEN") {
    return {...state, when: action.payload };
  }
  if (action.type === "SETTIME") {
    return {...state, time: action.payload };
  } else {
    console.log(action.type);
    console.log(action.payload);
  }
};

const InputsProvider = (props) => {
  const [inputsState, dispatchInputsAction] = useReducer(
    inputsReducer,
    defaultInputsState
  );
  const setStartingAmountHandler = (amount) => {
    dispatchInputsAction({
      type: "SETAMOUNT",
      payload: amount,
    });
  };
  const setAfterHandler = (years) => {
    dispatchInputsAction({
      type: "SETAFTER",
      payload: years,
    });
  };
  const setReturnHandler = (rate) => {
    dispatchInputsAction({
      type: "SETRATE",
      payload: rate,
    });
  };
  const setCompoundHandler = (period) => {
    dispatchInputsAction({
      type: "SETCOMPOUND",
      payload: period,
    });
  };
  const setContributionHandler = (amount) => {
    dispatchInputsAction({
      type: "SETCONTRIBUTION",
      payload: amount,
    });
  };
  const setWhenHandler = (when) => {
    dispatchInputsAction({
      type: "SETWHEN",
      payload: when,
    });
  };
  const setTimeHandler = (time) => {
    dispatchInputsAction({
      type: "SETTIME",
      payload: time,
    });
  };
  const inputsContext = {
    startingAmount: inputsState.startingAmount,
    after: inputsState.after,
    returnRate: inputsState.returnRate,
    monthlyRate: inputsState.monthlyRate,
    compound: inputsState.compound,
    additionalContribution: inputsState.additionalContribution,
    when: inputsState.when,
    time: inputsState.time,
    setStartingAmount: setStartingAmountHandler,
    setAfter: setAfterHandler,
    setReturn: setReturnHandler,
    setCompound: setCompoundHandler,
    setContribution: setContributionHandler,
    setWhen: setWhenHandler,
    setTime: setTimeHandler,
  };
  return (
    <InputsContext.Provider value={inputsContext}>
      {props.children}
    </InputsContext.Provider>
  );
};

export default InputsProvider;
