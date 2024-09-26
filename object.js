const a = {};                                   //syntax to declare an object
console.log(a);


const person = {                                //fixed values assigned
    name:"Pawni",
    age: 21,
    isemployed:false
};
console.log(person);
console.log(person.age);                      //dot notation


let person2 = new Object();                   // can give values later and even updated
person2.name="Pawni";
person2.age="21";
console.log(person2.name);   
person2.name="Pawni Dixit";                   //dot notation
console.log(person2["name"]);
delete person2.name;                          //deleting value
console.log(person2);


const person3 = {                   
    name:"Pawni",
    age: 21,
    greet:function(){
        console.log("Hello! " + this.name);      //'this' keyword is used to access the values of object inside itself
    }
};
person3.greet();
console.log(Object.keys(person3));              //gives all the keys of the object
console.log(Object.values(person3));            //gives all the values of the object
Object.freeze(person3);                         // makes the values constant i.e., they can't be changed anymore


let person = {                                 //copying object using clone
    name:"Rahul",
    age:26
}
let cloneObject = Object.assign({},person)
console.log(cloneObject)

let emp = {
    id: 2210,
    dep: "CS"
}

let cloneObject1 = Object.assign({},person , emp)    //combining more than one object 
console.log(cloneObject1)


let ob1={
    name :"Pawni",
    year:"third"
};
console.log(ob1);
Object.seal(ob1);                                     //Object.seal() fixes the keys but value change is allowed
ob1.name="Pawni Dixit";
console.log(ob1);
console.log("hello")
