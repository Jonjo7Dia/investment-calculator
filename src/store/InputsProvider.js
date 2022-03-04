import { useReducer } from "react";

import InputsContext from "./inputs-context";
function monthRate(interest) {
    let monthlyRate = ((1 + (100/6))^(1/12))-1;
    return monthlyRate;
}
const defaultCartState = {
  startingAmount: 20000,
  after: 10,
  returnRate: 6,
  monthlyRate: monthRate(returnRate),
  compound: "annually",
  additionalContribution: 1000,
  when: "end",
  time: "month",
};


const inputsReducer = (state, action) => {
    if (action.type === 'SETAMOUNT'){
        state.startingAmount = action.payload;
    }
    if (action.type === 'SETAFTER'){
        state.after = action.payload;
    }
    if (action.type === 'SETRATE'){
        state.returnRate = action.payload;
    }
    if (action.type === 'SETCOMPOUND'){
        state.compound = action.payload;
    }
    if (action.type === 'SETCONTRIBUTION'){
        state.additionalContribution = action.payload;
    }
    if (action.type === 'SETWHEN'){
        state.when = action.payload;
    }
    if (action.type == 'SETTIME'){
        state.time = action.payload;
    }
    else {
        console.log('error');
    }


};

const InputsProvider = (props) => {
  const [inputsState, dispatchInputsAction] = useReducer(
    inputsReducer,
    defaultCartState
  );
  setStartingAmountHandler = (amount) => {
      dispatchInputsAction({
          type: 'SETAMOUNT',
          payload: amount,
      });
  };
  setAfterHandler  = (years) => {
    dispatchInputsAction({
        type: 'SETAFTER',
        payload: years,
    });
  };
  setReturnHandler  = (rate) => {
    dispatchInputsAction({
        type: 'SETRATE',
        payload: rate,
    });
  };
  setCompoundHandler  = (period) => {
    dispatchInputsAction({
        type: 'SETCOMPOUND',
        payload: period,
    });
  };
  setContributionHandler  = (amount) => {
    dispatchInputsAction({
        type: 'SETCOMPOUND',
        payload: amount,
    });
  };
  setWhenHandler  = (when) => {
    dispatchInputsAction({
        type: 'SETWHEN',
        payload: when,
    });
  };
  setTimeHandler  = (time) => {
    dispatchInputsAction({
        type: 'SETTIME',
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
  }
  return (
      <InputsContext.Provider value={inputsContext}>
          {props.children}
      </InputsContext.Provider>
  )

};
