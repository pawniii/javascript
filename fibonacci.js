const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter the number of terms: '));
let a=0,b=1,c,i;
console.log('Fibonacci Series:');

for(i=1;i<=number;i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c;
}