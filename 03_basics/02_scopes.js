let a = 300

if(true)
{
    let a = 10
    const b = 20
    // var c = 30 
    // console.log("Inner : " , a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const userName = "Priyanka"

    function two()
    {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    
    two()
}

// one()

if (true)
{
    const userName = "Prasad"
    if (userName === "Prasad")
    {
        const website = " youtube"
        // console.log(userName + website);
    }
    // console.log(website);
    
}
// console.log(userName);

//***************** INTERESTING ********************//
function addOne(num)
{
    return num+1
}
const value = addOne(5)
console.log(value);

const addTwo = function(num){
    return num+2
}

addTwo(5)