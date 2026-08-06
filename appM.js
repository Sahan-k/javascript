//module import 

// default import
import multiply from "./mathOperationM.js";

//named import 
import {add, substract} from "./mathOperationM.js"

console.log(`Product is ${multiply(5,2)}`);

console.log(`Sum is ${add(4,2)}`);
console.log(`DIfference is ${substract(10,2)}`);
