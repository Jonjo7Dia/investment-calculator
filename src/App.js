import Data from "./components/Data/Data";
import InputsProvider from "./store/InputsProvider";
import React from "react";
function App() {
  return (
    <InputsProvider>
      <Data />
    </InputsProvider>
  );
}

export default App;
