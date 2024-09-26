const prompt= require(`prompt-sync`)();

const str= prompt(`Enter a string: `);

var i, ch,nstr="",rev="";

for(i=0;i<str.length;i++)
{
    ch=str.charAt(i);
    if(ch!=" ")
    {
        nstr=str+ch;
        rev=ch+nstr;
    }
}

if(nstr===rev)
{
    console.log("test case successfull");
}
else
console.log("test case unsuccessfull");


//   TRY USING const regex = /[^a-z0-9]/g