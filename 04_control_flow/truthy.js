// const userEmail = "Pri@gmail.com"
const userEmail = []


if (userEmail) 
{
    // console.log("Got user email");
}
else
{
    // console.log("Don't have user email");
}

// falsy Values : 
    // -> false
    // -> 0
    // -> -0
    // -> BigInt
    // -> 0n
    // -> ""
    // -> null
    // -> undefined
    // -> NaN

// truthy Values
//     -> "0"
//     -> "false"
//     -> " "
//     -> []
//     -> {}
//     -> function(){}

// Array la jr check kraych asel tr empty ahe ki nahi te

if(userEmail.length === 0)
{
    // console.log("Array is empty");   
}

// object la jr check kraych asel tr empty ahe ki nahi te

const emptyObj = {}
if (Object.keys(emptyObj).length === 0)
{
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) :  null undefined

let val1 ;
// val1 = 5 ?? 10 ;
// val1 = null ?? 10 ;
// val1 = undefined ?? 15 ;
val1 =  null ?? 10 ?? 20

// console.log(val1);

// Ternary Operator
// Syntax -> condition ? true : false ;

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");



