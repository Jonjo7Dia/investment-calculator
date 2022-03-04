import React from 'react';

const InputsContext = React.createContext({
    startingAmount: 20000,
    after: 10,
    returnRate: 6,
    monthlyRate: 0,
    compound: 1,
    additionalContribution: 1000,
    when: 'End',
    time: 12,
    setStartingAmount: (amount) => {},
    setAfter: (years) => {},
    setReturn: (rate) => {},
    setCompound:(period) => {},
    setContribution :(amount) => {},
    setWhen: (when) => {},
    setTime :(time) => {},
});

export default InputsContext;
