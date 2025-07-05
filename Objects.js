// OBJECTS PART :- I 
//In JavaScript, an object is a collection of key-value pairs, 
//where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.
 //An object can have a property that is itself another object, 
 //enabling the creation of complex data structures.



//Single ton ----------> Single ton creates when we use Constructor creation for Objects.
//Object.create.

//litterals--->  
const key = Symbol("KeyId")
const myObj = {
    [key]:101,//--------> if we want to use Sybol data types then we have to use[].
    name : "rahul rana",
    "Father full Name":"Devendra rana", // -----> Js , in objects takes key as string , so if define a full string it never accessed like myObj.Father full name !
    age : 18,
    location : "koderma",
    "Tech skill":["java","Spring boot","Spring","Html","Css","js","React.js"]
}

//There is two way to access key and value : 
// 1 by . notation : 
console.log(myObj.name); 
//2 by [] : 
console.log(myObj["name"]);
console.log(myObj["Father full Name"]); //-----> here it's neccesory to use [] method for accessing value's .

console.log(myObj);

//In js we can treat methods as variables :
myObj.func=function(){
    console.log(`hello mr. ${this.name}`);//-------> it's called String interpolation .. using ` ` we can merge string+value.
    
}
// both return same value but, some time it's neccesory to use [] method for accessing data form object .

console.log(myObj.func());





