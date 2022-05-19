import "../App.css";

function Button(classname, value, onclick){
    return(<button classname = {classname} onclick = {onclick}>{value}</button>);
}