//JS has dynamic typing. Value has the type NOT the variable.

/*
Number
String
Boolean
Undefined
Null
Symbol
BitInt
*/

// console.log(typeof(console));

// let jsIsFun = true;
// console.log(typeof(jsIsFun));

// jsIsFun = 1; //dynamic typing
// console.log(typeof(jsIsFun));

// let year; //undefined
// console.log(year);

// year = 2003;
// console.log(typeof(year))

// console.log(typeof(null)) //a bug?

let age = 30;
age = 31; //mutating a variable

const birthYear = 1991; //immutable variable
//birthYear = 1992;

//const HAS to be initialized when created

//lastName = 'My Name'; //scope of the code

const now = 2022
const ageAndrew = 2037 - now;
const ageFriend = 2044 - now;

console.log(ageAndrew, ageFriend);

console.log(ageAndrew / 2, ageFriend * 2);
console.log(2 ** 3);

const fristName = 'Andrew';
const lastName = 'Nero';

console.log(fristName + ' ' + lastName);

let x = 10 + 5;
console.log(x);

x += 22;
console.log(x);

x *= 2;
console.log(x);

x++;
console.log(x);

console.log(3>2);
console.log(ageAndrew <= 18);

const isMature = ageAndrew >= 18;
console.log(isMature);