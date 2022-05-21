import CalculatorScreen from "./Screen";
import '../App.css';
import ButtonBox from "./ButtonBox";
import Button from "./Button";



function CalculatorContainer(props){
    return(<div className = "wrapper">
            {props.children}
           </div>);
}

export  default CalculatorContainer;