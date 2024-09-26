const prompt= require(`prompt-sync`)();

const n1= parseInt(prompt(`Enter first number: `));
const n2= parseInt(prompt(`Enter second number: `));

var i, hcf=1, lcm=0 ;

for( i=2; i<= Math.min(n1, n2); i++)
{
    if(n1%i==0 && n2%i==0)
    {
        hcf=i;
    }
}

lcm= (n1 * n2)/hcf;

console.log(`HCF of ${n1} and ${n2} is ${hcf}`);
console.log(`LCM of ${n1} and ${n2} is ${lcm}`);
