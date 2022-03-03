import { useReducer } from "react";

import InputsContext from "./inputs-context";

const defaultCartState = {
  startingAmount: 20000,
  after: 10,
  returnRate: 6,
  compound: "annually",
  additionalContribution: 1000,
  when: "end",
  time: "month",
};

const inputsReducer = (state, action) => {};

const InputsProvider = (props) => {
  const [inputsState, dispatchInputsAction] = useReducer(
    inputsReducer,
    defaultCartState
  );
};
