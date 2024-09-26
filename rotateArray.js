const prompt = require('prompt-sync')();
const d = parseInt(prompt(`Enter a number: `));

//ROTATE ARRAY BY D PLACES

let a =[3,5,4,3,2,1,6,7];
let i,j,temp=[];
for(i=0,j=d-1;i<j;i++,j++)
{
    temp[i]=a[i];
}
temp.reverse();
console.log(temp);
// for(let j = d; j<a.length; j++)
// {
    
// }
a.reverse();
console.log(a);