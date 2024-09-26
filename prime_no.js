const prompt = require('prompt-sync')();

let n, i, flag=0;

n = parseInt(prompt("Enter a number: "));
for(i=1;i<=n;i++)
{
    if(n%i==0)
    {
        flag++;
    }
}
if (flag == 2) {
    console.log(`${n} is a Prime Number`);
  } else {
    console.log(`${n} isn't a Prime`);
  }