// singleton
// Object.create  // hyala constructor method mhantat

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Priyanka",
    "full_name" : "Gaikwad",
    [mySymbol] : "mykey1",
    age : 18,
    location : "Pune",
    email : "priyanka@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "saturday"]
}
// console.log(jsUser);
// console.log((jsUser.email));
// console.log((jsUser["email"]));
// console.log((jsUser[mySymbol]))
// console.log(typeof jsUser.mySymbol)

jsUser.email = "prasad@gpt.com" // to change the value of particular key
// Object.freeze(jsUser)  // freeeze kelyanntr value change nahi hot apn trry kela tri nahi hot
jsUser.email = "prasad@micro.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello , how are you ?");   
}

jsUser.greeting2 = function(){
    console.log(`Hello, ${this.name}`);   
}

// console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // Hello , how are you ?
console.log(jsUser.greeting2()); // Hello , Priyanka
