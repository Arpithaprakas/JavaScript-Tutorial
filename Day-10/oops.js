// object oriented Programming

let car = {
    make : "Toyota",
    model : "Camry",
    year: 2020,
    start : function def(){
        return `${this.make} car got started in ${this.year}`
    }
}
// console.log(car);
// console.log(car.start());

function Person(name,age){
    this.name = name;
    this.age = age;
}

let new_person = new Person("John",35)
// console.log(new_person);

// Prototype chain means adding new property for class using prototype 

function Animal(type){
    this.type = type
}

Animal.prototype.color = function(){
    return `${this.type}`
}

// Creating class

class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} made from ${this.make}`
    }
}

// Inheritance

class Bus extends Vehicle{
    drive(){
        return `This is inheritance example`
    }
}

let new_bus = new Bus("tata",'Idk')
// console.log(new_bus.start());
// console.log(new_bus.drive());

// Encapsulation

class BackAccount{
    #balance = 0;

    addDeposit(amount){
        this.#balance += amount;
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance} in account`
    }
}

let acc = new BackAccount();
// console.log(acc.addDeposit(300));
// console.log(acc.getBalance());

// Abstraction

class CoffeeMachine{
    start(){
        console.log("Starting Coffee Machine");
        
    }

    brewing(){
        console.log("Brewing coffee Machine");
        
    }
    ready(){
        this.start()
        this.brewing()
        return `Your coffee processing`
    }
}
let myMachine = new CoffeeMachine()
// console.log(myMachine.ready());

// Polymorphism

class Bird{
    fly(){
        return `Flying.....`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`
    }
}

let b = new Bird()
let p = new Penguin()
// console.log(b.fly());
// console.log(p.fly());

// Static method

class Calculator{
    static add(a,b){
        return a+b;
    }
}

let cal = new Calculator()
// console.log(cal.add(3,4)); it gives error 
// console.log(Calculator.add(3,4));

// Getters and setters


















