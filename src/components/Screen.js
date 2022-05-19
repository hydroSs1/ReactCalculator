import '../App.css';
import {Textfit} from "react-textfit";

function CalculatorScreen(value){
    return(<Textfit classname = "screen" mode = "single" max = {70}>{value}</Textfit>);
}

export  default CalculatorScreen;