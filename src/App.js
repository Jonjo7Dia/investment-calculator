import Data from "./components/Data/Data";
import InputsProvider from "./store/InputsProvider";
import ResultsProvider from "./store/ResultsProvider";
import ComplexProvider from "./store/ComplexProvider";

function App() {

  return (
    <InputsProvider>
     
        <ResultsProvider>
        <ComplexProvider>
          <Data />
          </ComplexProvider>
        </ResultsProvider>
    
    </InputsProvider>
  );
}

export default App;
