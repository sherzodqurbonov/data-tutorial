"use strict"
const date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMilliseconds());
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date);
// console.log(date.getTimezoneOffset());
// console.log(date.getTime());
                            
                // set
// console.log(date.setHours(11)); 
// console.log(date);               
const startDate = new Date();
console.log(startDate.getTime());

for(let i = 0; i < 100000; i++){
    let a = i ** 3;
}
const endDate = new Date();
console.log(endDate.getTime());

alert(`Tsike ${endDate - startDate} works in milliseconds`)