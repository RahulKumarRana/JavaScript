//OBJECT'S PART :- 2

const myObj2 = {
    UserId : 101 ,
    "UserFull Name" :{             //----------> we assing multiple object in object {nested objects}
        "User first Name":"rahul",
        "User Last Name":"rana"
    } ,
    "User detail":{
          "User Email":"rahulkumarrana008@gmail.com",
          "User contact no:":9508186218,
          "User Address":"Aadarsh nagar , Koderma"
    }
}
// console.log(myObj2);
//console.log(myObj2["User detail"]["User Address"]); // -------> For accessing inner object values , we can use (.) operator or [] for accessing 
//full length strings.

//MERGIN OBJECTS :
const user1={
    name:"kuljeet rana",
    Occupation:"Student"
}
const user2={
    name:"pummy singh",
    Occupation:"Student"
}

const allUsers=Object.assign({},user1,user2)// ---------> Object.assign used to concate objects at one , it also return a object.
// here {} is target object that returns.
const allUser={...user1,...user2} ///-------> we can also use sprade method to concat this.
// console.log(allUsers);
const keys =Object.keys(myObj2) //-------> it's returns a array of keys.
const values=Object.values(myObj2)//-------> returns a array of values.
//console.log(keys);
//console.log(values);

console.log(myObj2.hasOwnProperty('UserId'));

