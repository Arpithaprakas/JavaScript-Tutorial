const num1 = 300
console.log(typeof(num1));
console.log(num1);

const num2 = new Number(300.34526)
console.log(num2);
console.log(typeof(num2));

console.log(num2.toFixed(1)); // 0 adds after .(point)
console.log(num2.toLocaleString().length);
console.log(num2.toPrecision(4)); // total numbers including both sides
console.log(num2.toExponential(5));
console.log(num2.valueOf());

/* Maths Operations 
In javascript Math library includes by default */


console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-30));
console.log(Math.round(34.2672));
console.log(Math.ceil(34.2)); //it choose higher value if we have lesser value after point also
console.log(Math.floor(29.9)); // it round lower value resepct to existing value 
console.log(Math.random()); // it always returns values between 0 and 1


const min = 1
const max = 6

console.log(Math.floor((Math.random())*(max-min+1))+min); // this is important logic we can use this to solve some dice or random
                                                          // number choosing problems

console.log(Math.floor(Math.random()*10)+1); // if we want numbers from 1 to 10 use this logic


 















