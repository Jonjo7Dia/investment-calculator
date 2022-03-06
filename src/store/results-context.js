import React from "react";

const ResultsContext = React.createContext({
  complexSelected: false,
  complexMonthlyContributions: [],
  data: {},
  results: {monthlyResults: [], totalContributions: 0, totalInterest: 0, startingAmount: 0, endBalance: 0},
  setData: (userInput) => {},
  setMonthly: (userInput) => {},
  setComplex: (userInput) => {},
  setResults: () => {},
});

export default ResultsContext;
