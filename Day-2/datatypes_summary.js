/*
Datatypes are categarized by how data are stored and how
how data are accessed
There are two types 1) Primitive 
7 types: String,Number,boolean,null,undefined, Symbol, BigInt
call by value
2) Reference or non-primitive datatypes
Array,Objects, Functions

JavaScript is dynamiccaly types language
In dynamically typed languages:

You don’t have to declare the data type of a variable.

The type is determined at runtime, based on the value you assign.

A variable can change type while the program is running.
*/

/*
Type of list
number => number
String => String
boolean => boolean
null => object
undefined => undefined
Symbol => Symbol is used for unique identification
Array => Object
object => object
function => function it is actually object function
*/

let accno = undefined
const id = Symbol("BM23")
let anotherId = Symbol("BM23")
//console.log(id === anotherId);

const heros = ["superman","Doreman","Ben10"];  // Array
let myobj = {        
    name : "Appi",
    age :22
};  // Object it can hold data of different types like array, string etc

console.log(typeof myobj);

let myfun = function(){
    console.log("Hello world");
    
}

console.log(typeof myfun);



