// Higher order loop

// for of

let arr = [1,2,3]

for (const element of arr) {
    console.log(element);
}

let greetings = "hello"

console.log(`Print every character in ${greetings}` );
for (const greet of greetings) {
    console.log(greet);
}

//Maps

// It contains only unique values. If we repeat values but still takes only one value
// It is key-value pair

const map = new Map()   // Creating map
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('JP','Japan')
map.set('JP','Japan')
console.log(map);

// Output:
// Map(4) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France',
//   'JP' => 'Japan'
// }

for (const key of map) {
    console.log(key);    
} // it gives output same as above

for (const [key,value] of map) {
    console.log(key);
}  // it gives only keys. [] is used for destructring map

for (const [key,value] of map) {
    console.log(key, ':', value);    
}

// output:
// IN : India
// USA : United States of America
// Fr : France
// JP : Japan

