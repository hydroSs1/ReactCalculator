import logo from './logo.svg';
import './App.css';
import CalculatorContainer from './components/Wrapper';
import CalculatorScreen from './components/Screen';


function App() {
  return (
    <CalculatorContainer>
      <CalculatorScreen value = {5}>
        aa
      </CalculatorScreen>
    </CalculatorContainer>
  );
}

export default App;
