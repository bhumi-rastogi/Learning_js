let score = 33
console.log(typeof score);
console.log(typeof (score)); // as a method


score = "33"
console.log(typeof (score)); 

// NUMBER
let valueInNumber  = Number(score)
console.log(typeof valueInNumber);

score = "33abc" //string+num
let mixInNumber  = Number(score) // str->num don't rely on numbers
console.log(typeof mixInNumber); 
console.log(mixInNumber); //nan

score = null  
mixInNumber  = Number(score) // str->num don't rely on numbers
console.log(typeof mixInNumber); 
console.log(mixInNumber); // 0

score = undefined
mixInNumber  = Number(score) // str->num don't rely on numbers
console.log(typeof mixInNumber); 
console.log(mixInNumber); // nan

score = true 
mixInNumber  = Number(score) // str->num don't rely on numbers
console.log(typeof mixInNumber); 
console.log(mixInNumber); //true => 1 and false => 0

score = "undefined"
mixInNumber  = Number(score) // not possible
console.log(typeof mixInNumber); // undefined
console.log(mixInNumber); // nan




// BOOLEAN
let isLoggedIn = 1
let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //1 => true and 0 => false

isLoggedIn = ""
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); // empty string is false

isLoggedIn = "Bhumi"
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //string is true

isLoggedIn = 98
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //num is true

isLoggedIn = NaN
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //NaN is false

isLoggedIn = undefined
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //undefined is false

isLoggedIn = null
booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(booleanIsLoogedIn); //null is false



//String -> converts every datatype into string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string

someNumber = true
stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string both in true and false 

someNumber = null
stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string

someNumber = undefined
stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string

someNumber = NaN
stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); //string