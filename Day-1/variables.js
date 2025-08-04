const accountId = 12342
let accountType = "Savings"
var accountCity = "Delhi"
let accountState;
/*
prefer to use let and const
not use var beacuse of issue in block scope and functional scope 
also don't use accountState = "Delhi" 
if don't give any values to variable it shows undefined
*/
console.table([accountId,accountType,accountCity,accountState])