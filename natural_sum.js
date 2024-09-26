const prompt = require(`prompt-sync`)();

const number= parseInt(prompt(`Enter a number: `));

var sum= number*(number+1)/2;

console.log(`Sum of ${number} natural numbers: ${sum}`);