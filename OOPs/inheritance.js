class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from  ${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance exmple`;
    }

}
let myCar = new Car("Toyota","Corolla ");
// console.log(myCar.start());
// console.log(myCar.drive());

let veicle1 = new Vehicle("Honda","Civic");
// console.log(veicle1.make);

