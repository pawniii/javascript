// largest element , greetings; higher order function
//MAP
const prompt = require('prompt-sync')();
const d = parseInt(prompt(`Enter a number: `));

let a=[2,4,7,5,3,6,8];
let i;
let result1=a.map((item)=>{
    return item*2;
});

console.log(result1);

let result2=a.filter((item)=>{
    return item>5;
});
console.log(result2);
console.log(a);

// let temp = a[0];
// for(i=0; i<a.length; i++){
//     a[i]= a[i+1];
// }
// a[a.length-1]=temp;
// console.log(a);