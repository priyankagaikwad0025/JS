// reduce()

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (accumulator , currenValue){
//     console.log(`accumulator : ${accumulator} and current Value : ${currenValue}`);
    
//     return accumulator + currenValue
// },0)

// console.log(myTotal);

// const myTotal = myNum.reduce( (accumulator,currenValue) => {
//     console.log(`accumulator : ${accumulator} and current Value : ${currenValue}`);
//     return accumulator+currenValue
// },0)

// console.log(myTotal)

// const myTotal = myNum.reduce((acc,curr) => acc+curr , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "Data science course",
        price : 12999
    },
]

const cartTotal = shoppingCart.reduce((acc , item) => { 
    return acc + item.price
},0)

console.log(cartTotal);

