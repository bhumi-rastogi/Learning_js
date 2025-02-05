const accountId = 14553
let accountEmail = "bhumi@cute.com"
var accountPassword = "12345"

//possible h
// variable can also be declared like this but not preffered at all
accountCity = "Jaipur"

let accountState; // var declared but not assigned is undefined

// accountId = 2 // not allowed

// {}:scope
accountEmail = "hjd@bjn.com"
accountPassword = "21384"
accountCity = "Banglore"

console.log(accountId); 

/* 
Prefered not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])