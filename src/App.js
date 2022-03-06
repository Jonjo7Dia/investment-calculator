import Data from "./components/Data/Data";
import InputsProvider from "./store/InputsProvider";
import ResultsProvider from "./store/ResultsProvider";
import ComplexProvider from "./store/ComplexProvider";
import React from "react";
function App() {
  return (
    <InputsProvider>
      <ComplexProvider>
        <ResultsProvider>
          <Data />
        </ResultsProvider>
      </ComplexProvider>
    </InputsProvider>
  );
}

export default App;
