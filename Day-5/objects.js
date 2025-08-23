// We can declare objects in two ways 1) Literal 2)Constructor

// Objects literals

const n1 = Symbol("32") // define symbol

const myObj = {
    name : "Arpitha",
    phoneNo : 234265131,
    email : "arpitha@gmail.com",
    score : [79,88,65],
    [n1] : "Fisrt"                 // way to declare Symbol
}

//Access objects
console.log(myObj.name); // first way, this way used almost
console.log(myObj["email"]); // this is better way to access objects
console.log(myObj[n1]);
console.log(typeof n1);
console.log(myObj);


// change value of key 
myObj.phoneNo = 7635286252

console.log(myObj);
myObj.email = "appi03@gmail.com"
Object.freeze(myObj)    // This freeze the value of object
myObj.email = "arpitha@bmsce.ac.in"
console.log(myObj);

// Function using objects

myObj.greetings = function(){
    console.log(`Hello , ${this.name}`);
    
}

console.log(myObj.greetings());








