// challenge 1

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Lemon tea");
console.log(teaOrder);


//challenge 2

function orderTea(teatype){
    function confirmOrder(){
        return `Order confirmed for ${teatype}`;
    }
    return confirmOrder();
}

let orderconfirmation = orderTea("chai");
console.log(orderconfirmation);


//challenge 3

const calculateTotal = (price, quantity) => {
    return price * quantity;
}
let totalcost = calculateTotal(20,10);
console.log(totalcost);
  or

 const calculateTotal = (price, quantity) => price * quantity;

let totalcost = calculateTotal(20,30);
console.log(totalcost);

//challnge 4

function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
   return teaFunction(`earl grey`)
}

let order = processTeaOrder(makeTea);
console.log(order);

//challenge 5

function createTeamaker(name){
    return function(teatype){
        return `Making ${teatype} ${name}`;
    }
}

let teaMaker = createTeamaker("sahan");
console.log(teaMaker("green Tea"));



    
