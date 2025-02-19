const user = 
{
    userName : "Priyanka",
    price : 999,

    welcomeMessage : function()
    {
        // console.log(`${this.userName}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai()
// {
//     // console.log(this);
// }
// chai()

// const chai = function()
// {
//     let userName = "Priya"
//     console.log(this.userName);   
// }

const chai = () =>
{
    let userName = "Priya"
    console.log(this.userName); 
    console.log(this); 
}
chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1 , num2) =>  num1 + num2;
// const addTwo = (num1 , num2) =>  (num1 + num2);
// const addTwo = (num1 , num2) =>  {return num1 + num2};
// const addTwo = (num1 , num2) =>  {userName : "Priyanka"} //undefined error yeil
const addTwo = (num1 , num2) =>  ({userName : "Priyanka"} )


console.log(addTwo(10,11))