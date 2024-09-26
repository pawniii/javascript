const prompt = require(`prompt-sync`)();

var dig, i,sum=0;
const n= parseInt(prompt(`Enter a number: `));

for(i=n; i >0; i = Math.floor(i/10)){
    dig=i%10;
    sum+=dig;
}
console.log(`Sum of digit= ${sum}`);