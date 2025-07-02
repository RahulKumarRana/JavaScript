const arr=["rahul rana",101,"developer","java","Noida","Bca"]

let arr2=new Array();
for(let i=0;i<=5;i++){
    arr2[i]=i
    // console.log()
}
// console.log(arr2);
// console.log("The original array is: ",arr);
// console.log("use slice method : ",arr.slice(1,3));//   ------>  using slice method  doesn't manipulate the real array and it's 
//not include the range..
// console.log("array after using slice method : ",arr);
// console.log("Use splice :",arr.splice(1,3));// --------> splice method include the range and manipulate the real array !
//that is main deffernce between slice and splice.
// console.log("Array after using splice : ",arr);

//-------------> push method is used to add new element in array at last index.

// const array2=[101,102,103,104,105,106]
// console.log("original array is : ",array2);

// array2.push(107)
// console.log("after using push method array is : ",array2);

// ----------> pop method removes the element from array at the last index 

// console.log("original array : ",array2);array2.pop()
// console.log("after using pop : ",array2)

//-----------------> unshift() is used to add element at first index 

// array2.unshift(100)
// console.log("unshift method : ", array2);


//----------> shift is used to remove the first element of array 
//  array2.shift()
//  console.log("shift method : ",array2);


 // Array Part - 2 
const hero_marvel = ["Ironman","thor","black-widow","Holk"]
const DC_Hero=["Super-man","flash","aqua-man"]

//concat() ----------> it is used to concate both array at one array , it's return a new array :
const all_Hero=hero_marvel.concat(DC_Hero)
console.log(all_Hero);

//Sprade constructor----------->  it's like concate but we can add multiple arrays at ones place [most used]:

const all_Hero2=[...hero_marvel,...DC_Hero]//-----------> we can add more  then one arrays.
console.log("Sprade-constructor : ",all_Hero2);

//flate() - 

 
 




