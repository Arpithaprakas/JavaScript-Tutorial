let myDate = new Date();
console.log(myDate);

console.log(myDate.toString()); // output: Sun Aug 17 2025 13:33:51 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //output: Sun Aug 17 2025
console.log(myDate.toISOString()); //output: 2025-08-17T08:06:55.753Z
console.log(myDate.toJSON()); // Output: 2025-08-17T08:06:55.753Z
console.log(myDate.toLocaleDateString()); // Output: 8/17/2025
console.log(myDate.toLocaleString()); // output:8/17/2025, 1:36:55 PM
console.log(myDate.toLocaleTimeString()); // Output: 1:36:55 PM

/* Different ways to Declaring Dates */
// Note: In javascript Month start with 0
let new_date = new Date(2024, 1, 20) // Way-1 first give year,month, date 
console.log(new_date.toDateString());





