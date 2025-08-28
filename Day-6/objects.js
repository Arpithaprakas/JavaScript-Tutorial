//Singleton or constructor

//const tinderUser = new Object()   // Singleton object declaraion

const tinderUser = {} //non-singleton  object declaration

tinderUser.id = "1BM23"
tinderUser.name = "Raj"
tinderUser.isLoggedIn = true //Basic 
//console.log(tinderUser);

const User = {
    email : "abc@gmail.com",
    name : {
        actualName :{
            firstName : "Kumar",
            lastName : "Raj"
        },
        profileName : "Sammy"
    }
}

//console.log(User.name.actualName.firstName);

// Merging two or more objects

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

//console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

const n1 = {a : 10, b: 20, c : 30}
const n2 = {c : 40, d : 50}
const n3 = Object.assign({},n1,n2)
//console.log(n3);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // it gives array of all keys present in object. Output:  [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // it is also returns array of values present in object. Output: [ '1BM23', 'Raj', true ]
console.log(Object.entries(tinderUser)); //Output: [ [ 'id', '1BM23' ], [ 'name', 'Raj' ], [ 'isLoggedIn', true ] ]








