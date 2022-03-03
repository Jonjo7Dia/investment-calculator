import React from 'react';

const InputsContext = React.createContext({
    startingAmount: 20000,
    after: 10,
    returnRate: 6,
    compound: 'annually',
    additionalContribution: 1000,
    when: 'end',
    time: 'month',
    setStartingAmount = (amount) => {},
    setAfter = (years) => {},
    setReturn = (rate) => {},
    setCompound = (period) => {},
    setContribution = (amount) => {},
    setWhen = (when) => {},
    setTime = (time) => {},
});

export default InputsContext;
// import React from "react";

// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
//   clearCart: () => {}
// });
// export default CartContext;
