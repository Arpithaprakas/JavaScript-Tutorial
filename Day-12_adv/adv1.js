console.log("Jai RCB");

function sayHelo(){
    console.log("Helloooo!!!");
}

setTimeout(() => {
    sayHelo();
}, 5000);

console.log("After timeout");
for (let index = 0; index < 6; index++) {
    console.log(index);
}

/* 
javascript doesn't have capabilites to work on netwrok and timer functions
so it takes help of brower or other environmet to run so it shows 
asynchronous behaviour */

