import React from "react";

const ResultsContext = React.createContext({
  complexSelected: false,
  complexMonthlyContributions: [],
  data: {},
  results: [],
  setData: (userInput) => {},
  setMonthly: (userInput) => {},
  setComplex: (userInput) => {},
  setResults: () => {},
});

export default ResultsContext;
