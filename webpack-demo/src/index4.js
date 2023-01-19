//myModule.js
import { functionOne,functionTwo } from "./myModule"

function component (){
    const element = document.createElement('div')

    //use your function 
    element.textContent = functionOne() +' '+functionTwo ()
    return element;
}

document.body.appendChild(component())
