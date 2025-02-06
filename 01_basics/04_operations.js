let valueOne = 3
let negValueOne = -valueOne
// console.log(negValueOne);

// Basic Math Operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(7%2);

let str1 = "hello"
let str2 = " Bhumi"
let str3 = str1 + str2 // String Concatination
// console.log(str3);

str3 = str1 - str2 // NaN
// console.log(str3); 


// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32


// console.log(true) //=> true
// console.log(+true) // 1 => conversion ho jayega
// console.log(true+) not possible => throw error
// console.log(+"") // 0 => conversion ho jayega

// This is not readable
// let num1 ,num2 ,num3
// num1 = num2 = num3 = 2+2
// console.table([num1,num2,num3])
// num1 = 9
// console.table([num1,num2,num3])

let gameCounter = 100
// ++ add one in both situtions
gameCounter ++; // postfix
console.log(gameCounter);
++ gameCounter ; //prefix
console.log(gameCounter);



let x = 3;
const y = x++; // put old value in y then there is increment in x

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // increase the value of a and then put it in b

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
