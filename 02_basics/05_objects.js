const tinderUser = new Object(); // object singleton asel
// const tinderUser ={}  // o/p same ch yeil doghanch PN fkt hyacha object singleton nasel

tinderUser.id = "123abc"
tinderUser.name = "Prasad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFName : {
            firstName : "Priyanka",
            lastName : "Gaikwad"
        }
    }

}

// console.log(regularUser.fullName); 
// console.log(regularUser.fullName.userFName.firstName);

const obj1 = { 1: "a" , 2 : "b" }
const obj2 = { 3: "a" , 4 : "b" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) // {} : this is the oprional 

const obj3 = {...obj1,...obj2}

// console.log(obj3);

// Data base mdhun asha entries yetat like its array of objects
const users = [
    {id:1,name:"Priyanka"},
    {id:2,name:"Prasad"},
    {id:3,name:"Parshyaaa"},
]

users[1].id
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor : "Gappu"
}

// course.courseInstructor

// de-structuring
// const {courseInstructor } = course;
// console.log(courseInstructor);

const {courseInstructor : instructor } = course;// this is called destructuring
console.log(instructor);


// here {Company} is the destructuring syntax in react .
// const navbar = ({Company}) => {

// }
// navbar(Company = "Priyanka")


// Api in Json Format
// {
//     "name" : "Priyanka",
//     "courseName" : "Js in Hindi",
//     "price" : "free"
// }