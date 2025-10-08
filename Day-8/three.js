// using for loop in Objects

const myObj = {
    'js' : 'javascript',
    'cpp' : 'C++',
    'py' : 'Python'
}

//forin loop

for (const key in myObj) {
    console.log(key);
    
}

for (const key in myObj) {
    console.log(`${key} showrtcut is ${myObj[key]}`);
    
}

// output:
// js showrtcut is javascript
// cpp showrtcut is C++
// py showrtcut is Python

//foreach loop

//in for each loop we use function to print value

const coding = ['js','java','cpp','ruby']

coding.forEach((item) => {
    console.log(item);
});

// we can retrive index, entire array also. Below is code

coding.forEach((key, index, arr)=>{
    console.log(key,index,arr);
    
})

// output:

// js 0 [ 'js', 'java', 'cpp', 'ruby' ]
// java 1 [ 'js', 'java', 'cpp', 'ruby' ]
// cpp 2 [ 'js', 'java', 'cpp', 'ruby' ]
// ruby 3 [ 'js', 'java', 'cpp', 'ruby' ]

//Filter operation

Nums = [1,2,3,4,5,6,7,8,9]

const newNums = Nums.filter((num) => (num > 4))
console.log(newNums);


//reduce function

const myNums = [3,4,2,1] 

const Total = myNums.reduce(function (acc, curval){
    console.log(`acc: ${acc} and current value: ${curval}`);
    
    return acc+curval
},1)  // we can give any number as accumalator
console.log(Total);
