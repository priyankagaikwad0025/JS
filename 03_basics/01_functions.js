function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
}

sayMyName // he function cha reference ahe
// sayMyName() // function execution

// function AddN(No1 , No2) 
// {
//      console.log(No1 + No2);
     
// }

// function AddN(No1 , No2) 
// {
//     return(No1 + No2);
     
// }

function AddN(No1 , No2) 
{
    let result = No1 + No2;
    return result    
}

const res = AddN(10,11)
// console.log("result :" ,res);

function LoginUserMessage(userName = "Guest") 
{
    if(userName === undefined) // (!undefined) // both are same
    {
        console.log("please enter a username");
        return;
    }
    return `${userName}, just logged in`
}

const Name = LoginUserMessage("Priyanka")
// const Name = LoginUserMessage()
// console.log(Name);

// 2 hi ways ni apn kru shkto declare
// function calculateCartPrice1(...num1)
// {
//     return num1
// }

// function calculateCartPrice2(val1, val2,...num1)
// {
//     return num1
// }

// const totalPrice = calculateCartPrice(200,400,500, 2000)
// console.log(totalPrice);

const user = {
    userName : "Priyanka",
    price : 199
}

function handleObject(anyObject)
{
    console.log(`user name is : ${anyObject.userName} and price is : ${anyObject.price}`);
}

// function handleObject(user)
// {
//     console.log(`user name is : ${user.userName} and price is : ${user.price}`);
// }

// handleObject(user)
handleObject({
    userName : "Prasad",
    price: 399
})

const myNewArray = [200,400,600,800]

function handleArray(getArray)
{
    // return getArray
    return getArray[1]
}

// console.log(handleArray(myNewArray))
console.log(handleArray([200,300,400]))