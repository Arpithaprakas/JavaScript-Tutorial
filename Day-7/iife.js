/* IIFE = Immediately Invoked Function Expressions 

it is used for invoke function immediately also
it prevents global scope violation

*/

//Syntax is ()(). one () is for fucntion defination another one for function execution

(function one(){ //named IIFE
    console.log(`DB CONNECTED`);
    
})();

//arrow function in IIFE

((name) => {
    console.log(`Hello ${name}`);
})('Arpi')

//When we have two declare 2 IIFE function then we must separate funtion from ;