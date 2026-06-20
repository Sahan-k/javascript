function Person(name, age) {
    this.name = name;
    this.age = age;

}
let person = new Person("sahan", 21);
console.log(person.name);

//challenge 2

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`;
    };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}
Animal.prototype.sound = function(){
    return `${this.species} makes sound`;
}
let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());



