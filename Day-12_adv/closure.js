// Closures in JavaScript

function outer(){
    let count = 4
    return function(){
        count++;
        return count
    }
}

let increment = outer()
console.log(increment());

/* A closure means:

A function remembers variables from its outer scope even after the outer 
function has finished execution. */