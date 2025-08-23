const myArray1 = [1,2,3,4]
const myArray2 = [5,6]

const new_array = [...myArray1, ...myArray2] // this is called spead method it combines 2 or more arrays same as concatinate method
console.log(new_array);

let num_array = [1,2,[2,1],[1,[1,2,3]]]
let num1 = num_array.flat(Infinity)   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(num1); 
/* Output:  [
                                    1, 2, 2, 1,
                                     1, 1, 2, 3
                                ] */

// Creating array from different methods

console.log(Array.isArray("Chinnu")); // it is not array
console.log(Array.from("Chinnu")); // Creats new array Output: [ 'C', 'h', 'i', 'n', 'n', 'u' ]


// creating array from multiple values
let n1 = 10
let n2 = 20
let n3 = 30
let n4 = 40
//let new_alpha = ["a","b","c"]
let nums = Array.of(n1,n2,n3,n4)
console.log(Array.isArray(nums))// it gives true
console.log(nums);




