// // falsy and truly values for control flow

// falsy values 

// 0, -0, null, NaN, undefined , "", BigINT, false

// Truly values

// empty array [], empty object

// Nullish Coalescing Operator(??): null undefined

let val1;
let val2;
val1 = null ?? 10
val2 = undefined ?? 20
console.log(val1);
console.log(val2);

// // Ternary opearator

// // condition ? true : false
 const a = 10
a % 2 == 0? console.log("Even") : console.log("Odd")

// while and do-while loop

let i = 0
while (i<=20) {
    console.log(i);
    i += 2
}

let score = 10
do {
    console.log(score);
    score++;
    
} while (score < 10);

