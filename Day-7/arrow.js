//this keyword


// const instaUser = {
//     profilename : "queen",
//     actualname : {
//         firstname : "Sangeetha",
//         lastname : "Bhat"
//     },
//     toast : function(){
//         console.log(`${this.profilename}'s first name is ${this.actualname.firstname} and last name is ${this.actualname.lastname}`);
//         console.log(this)
        
//     }
// }

// instaUser.toast()
// /* Output: queen's first name is Sangeetha
// {
//   profilename: 'queen',
//   actualname: { firstname: 'Sangeetha', lastname: 'Bhat' },
//   toast: [Function: toast]
// }  

// */

// instaUser.actualname.lastname = "Urs"
// instaUser.toast()

// /*
// output: queen's first name is Sangeetha and last name is Urs
// {
//   profilename: 'queen',
//   actualname: { firstname: 'Sangeetha', lastname: 'Urs' },
//   toast: [Function: toast]
// }

// */
// console.log(this);

// Output is {} becuase  

//Arrow function 

//Syntax: () => { }

const addTwo = (n1,n2) => {
  return n1+n2
}

console.log(addTwo(6,6));

const increaseOne = (n1) => (n1+1)  // This is called implicit return no need to use { } and return keyword

console.log(increaseOne(5));






