import logo from './logo.svg';
import './App.css';
import CalculatorContainer from './components/Wrapper';
import CalculatorScreen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [["C","+-","%","7"], [7,8,9,"X"], [4,5,6,"-"],[1,2,3,"+"], [0,".","="]];

function App() {
  return (
    <CalculatorContainer>
      <CalculatorScreen value="777"></CalculatorScreen>
        <ButtonBox>
          {
            btnValues.flat().map((btn,i) => {
              return(
                <Button key = {i} className = {btn =="=" ? "equals" : ""} value = {btn} onClick={() => {console.log("${btn} clicked!")}}></Button>
              )
            })
          }
          
        </ButtonBox>
    </CalculatorContainer>
  );
}

export default App;
