let a=[1,66,8,4,8,4];  
a.sort();      //checks value character by character from LHS
console.log(a);
              // console.log(a.sort(a,b)=>(a-b);
              // An anonymous function is a function definition that doesn't have an identifier or name 

function fun(a,b)
{
    return (a+b);
}
console.log(fun(34,78));

let func = (a,b)=>{  //arrow function
    return a+b;
}

function greet(name){
    return name+", How are you?\n" ;
}

console.log(greet("Pawni"));

console.log("hello 1");
let time1 = setTimeout(()=>        //prints after 2000ms. other statement work as usual
{
    console.log("hello with time out 1");
},1000)
let time2 = setTimeout(()=>       
{
    console.log("hello with time out 2");
},3000)
let time3 = setTimeout(()=>       
{
    console.log("hello with time out 3");
},500)

console.log("hello 2");          //this prints before timeout

