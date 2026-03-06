// 1

function Animal(){}

Animal.prototype.speak = function(){
    return 'Animal Speaking';
}

function Dog(){}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(){
    return 'Woof!'
}

Dog.prototype.constructor = Dog

// 3

class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }

    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}`
    }
    move(){
        return 'The vehicle is moving'
    }

    static isVehicle(obj){
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle{
    startEngine(){
        return 'Engine started'
    }

    move(){
        return 'The car is driving'
    }
}

// 4
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

// Example
let circle = new Circle(5);
let rectangle = new Rectangle(10, 4);

console.log("Circle Area:", circle.area());
console.log("Rectangle Area:", rectangle.area());

class BankAccount {
    constructor(balance) {
        this._balance = balance; // private-like property
    }

    // Getter
    get balance() {
        return this._balance;
    }

    // Setter
    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Balance cannot be negative");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited: ${amount}`);
        }
    }

    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

// Example
let account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log("Current Balance:", account.balance);