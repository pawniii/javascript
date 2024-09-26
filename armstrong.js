const prompt= require(`prompt-sync`)();

const number= parseInt(prompt(`Enter a number: `));

var i, dig, sum=0;

for(i=number; i>0; i= Math.floor(i/10))
{
    dig=i%10;
    sum+=Math.pow(dig,3);
}

if(sum==number)
    console.log(`${number} is an Armstrong number`);
else
console.log(`${number} isn't an Armstrong number`);

