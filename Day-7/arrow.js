//this keyword


const instaUser = {
    profilename : "queen",
    actualname : {
        firstname : "Sangeetha",
        lastname : "Bhat"
    },
    toast : function(){
        console.log(`${this.profilename}'s first name is ${this.actualname.firstname} and last name is ${this.actualname.lastname}`);
        console.log(this)
        
    }
}

instaUser.toast()
/* Output: queen's first name is Sangeetha
{
  profilename: 'queen',
  actualname: { firstname: 'Sangeetha', lastname: 'Bhat' },
  toast: [Function: toast]
}  

*/

instaUser.actualname.lastname = "Urs"
instaUser.toast()

/*
output: queen's first name is Sangeetha and last name is Urs
{
  profilename: 'queen',
  actualname: { firstname: 'Sangeetha', lastname: 'Urs' },
  toast: [Function: toast]
}

*/
console.log(this);

// Output is {} becuase  

