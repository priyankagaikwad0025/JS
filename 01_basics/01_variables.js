const accountId = 144553 ;

let accountEmail = "pri@gmail.com"

var accountPassword = "12345"

accountCity = "Jaipur"

console.log(accountId,accountEmail,accountPassword,accountCity)

// accountId = 2 ;
console.log(accountId)

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "banglore"

console.table([accountEmail,accountPassword, accountPassword])

/*
Note : prefer not to use var bcoz of issue in block scope and functional scope
*/

let accountState ;

console.log(accountState)