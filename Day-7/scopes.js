function one(){
    let name = "Arpitha"
    function two(){
        console.log(name);    
    }
    two()
    console.log(name);
    
}
one()

console.log(addTwo(3,5))

function addTwo(num1,num2){
    const result = num1+num2
    return result
}

addThree(3)       //This is called hoisting it occurs because we calling function before initialization
const addThree = function(num){
    return num+3
}




