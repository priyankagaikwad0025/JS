// Dates 

let myDate = new Date()
// console.log(myDate) // Output: 2023-02-20T14:30:
// console.log(myDate.toString()) 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0 , 29)
// console.log(myCreatedDate.toDateString());

// let myCreatedDatewithTime = new Date(2025, 0 , 29 , 5,3)
// console.log(myCreatedDatewithTime.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

// console.log(`${newDate.getDay()} this is the day of the week`) // Output: 6 this is the day of the week

newDate.toLocaleString('default',{
    weekday: 'long',
})