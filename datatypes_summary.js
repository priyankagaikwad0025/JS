// primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100 
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34567898765432123456789n
// console.log(bigNumber);
// console.log(typeof bigNumber);




// Reference (Non - Primitive)

// 3 Types : Array , Objects , functions

// Array 
const Heros = ["shaktiman" , "naagraj" , "doga"]

// Objects 
let myObj = {
    name : "Priyanka",
    age : 22
}

// functions 

const myFunction = function()
{
    console.log("Jay Ganesh");
    
}
// console.log(typeof myFunction);
// console.log(typeof myObj);

// **********************************************************

// stack(Primitive)  , Heap(Non-Primitive)

let myName = "PinkiGaikwad"

let anotherName = myName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myName);

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}
console.log(user1);


let user2 = user1
console.log(user2);

user2.email = "Priyanka@google.com"

console.log(user1.email);
console.log(user2.email);

