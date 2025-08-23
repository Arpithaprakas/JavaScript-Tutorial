// Array declarations

 const myArray = [1,2,3,4,5]
 const myArr = new Array(2,3,4,5)
 console.log(typeof(myArray));
 console.log(typeof(myArr));

// // Array Methods

 myArray.push(6)
 myArray.push(8)

 console.log(myArray);

myArray.pop()
myArray.unshift(12)  // This method add element in first place
console.log(myArray); /* Output: [
                                   12, 1, 2, 3,
                                    4, 5, 6, 8
                                 ] */
myArray.shift() // It deleetes first element of the array
console.log(myArray);

// Question typed methods
console.log(myArray);


console.log(myArray.includes(4));
console.log(myArray.indexOf(2));

// Slice and Splice concept

let toyss = ["Ball", ["Car", "Doll"]];
let copy = toyss.slice(0, 2);

copy[1][0] = "Truck"; 

console.log(toyss); // ["Ball", ["Truck", "Doll"]] 😲 original changed

/* 
. slice() — Copy Without Cutting

You say: “Hey, give me a copy of the first 2 toys!”

slice() makes a new toy box with those toys.

But if a toy is a basket (like [Car, Doll]), it doesn’t copy the basket fully — it just gives you the same basket.

👉 So if you repaint the Car 🚗 in your copy basket, the Car 🚗 in the original basket is also repainted (because it’s the same basket).
 */

let toys = ["Ball", ["Car", "Doll"]];
let removed = toys.splice(0, 1);

removed[0][0] = "Truck"; 

console.log(toys);   // [["Truck", "Doll"]]  original still holds the same basket
console.log(removed);// ["Ball"]  (oops I removed Ball here)


/*
2. splice() — Actually Cutting

You say: “Cut out the first toy from my toy box!”

splice() goes into your real toy box and removes it.

It gives you another little box 🗃️ with the removed toys.

Same rule: if the removed toy is a basket, both boxes point to the same basket.
*/













