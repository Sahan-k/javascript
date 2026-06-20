//Encapsulation

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount()
// console.log(account.getBalance());


// Abstration

class CoffeMachine{
    start(){
        return `STarting the machine..`;

    }
    brewCoffe(){
        return `Brewing coffe`;
    }
    pressStartButton(){
        let message1 = this.start();
        let message2 = this.brewCoffe();
        return `${message1} + ${message2}`;
    }
}
let mymachine = new CoffeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffe());
// console.log(mymachine.pressStartButton());

//Polymorphism

class Bird{
    fly(){
        return `Flying..`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`;
    }
}
let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());




