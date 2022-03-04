import Data from "./components/Data/Data";
import InputsProvider from "./store/InputsProvider";
import ResultsProvider from "./store/ResultsProvider";
import React from "react";
function App() {
  return (
    <InputsProvider>
      <ResultsProvider>
        <Data />
      </ResultsProvider>
    </InputsProvider>
  );
}

export default App;
