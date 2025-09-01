// function addNumbers(num1,num2){
//     return num1+num2
// }

// //console.log(addNumbers(5,5))

// function HelloUser(username){
//     return `${username} welcome!`
// }

//console.log(HelloUser("Raj"));
//console.log(HelloUser());
//Output: undefined welcome!. It returns undefined not null

// function cartPrice(num1){
//     return num1
// }
// console.log(cartPrice(2000,200,100,20))

// Ouput : 2000

// function cartPrice(...num1){   // ... is called as Rest operator. Is used to pass multiple argument
//     return num1
// }
// console.log(cartPrice(2000,200,100,20))
// //Output: [ 2000, 200, 100, 20 ]

function cartPrice(value1, value2, ...num1){   
    return num1
}
//console.log(cartPrice(2000,200,100,20))
//Output: [ 100, 20 ]. Because 2000 assign to value1 and 200 is assign to value2

// Pass object as a argument in function

// const user = {
//     username :"Sam",
//     location :"Mysore"
// }

// function userData(anyobject){
//     console.log(`${anyobject.username} from ${anyobject.location}`);
    
// }

//userData(user)
//Output : Sam from Mysore

function loginUser(anyobject){
    console.log(`${anyobject.username} logged in successfully!`);
    
}

loginUser({
    username : "Ram"
})

//Output: Ram logged in successfully!

//Array 

const newArray = ["appi",23,45]

function returnFirstValue(printarray){
    return printarray[0]
}

console.log(returnFirstValue(newArray));







