import "../App.css";

function Button(props){
    return(<button className = {props.className} onclick = {props.onclick}>{props.value}</button>);
}

export default Button;