const prompt = require('prompt-sync')();

const number= parseInt(prompt(`Enter a number: `));

let prod=1;
for(let i=1; i<=10; i++)
{
    prod= number*i;
    console.log(`${number} * ${i} = ${prod}`);
}