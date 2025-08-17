const name = "Arpitha"
const repoCount = 3
console.log(`Hello my name is ${name} and my 
    github repository count is ${repoCount}`);
    // Above code is called string interpolation from using this it increses readability and it is modular way

const gameName = new String("Free-fire") // another way to define string it has features than normal defination it we can check this in console

console.log(gameName);

console.log(gameName.__proto__);// using this we can use different method like below
console.log(gameName.toUpperCase());
console.log(gameName.length);


console.log(gameName.at(2));  // retruns which character present in that index
console.log(gameName.big());  // returns html tag 
console.log(gameName.bold());
console.log(gameName.charAt(5));
console.log(gameName.search('fire'));
console.log(gameName.slice(4,8));  // give start and end index, end index is not excluded, we can give negative values also 
console.log(gameName.split('-'));
console.log(gameName.substring(3,5));// we cannot give negative values
console.log(gameName.trim());
console.log(gameName.valueOf());
console.log(gameName.indexOf('f'));











