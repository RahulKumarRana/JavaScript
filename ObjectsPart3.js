// De-structuring the object : It's just a syntaxtual sugar coting , that we use to code cleaner . 


const courses = {
         "Course name":"javaScript",
         Instructor : "Hitesh choudary",
         Price : 999
}
// when we want to use these object prequently then we can de-structure like this for better readablity or : 
const{Instructor} = courses // we can access the Intructor just calling by his name:

console.log(Instructor);
const{Instructor:Teacher}=courses // we also rename the object key.
console.log(Teacher);

// API :  
