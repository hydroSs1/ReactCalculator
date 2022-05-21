import '../App.css';
import {Textfit} from "react-textfit";

function CalculatorScreen(props){
    return(<Textfit className = "screen" mode = "single" max = {70}>{props.value}</Textfit>);
}


export  default CalculatorScreen;