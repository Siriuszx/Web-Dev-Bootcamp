'use strict';

// function logger(text) {
//     console.log(text)
// }

// // calling/invoking/running function

// logger('This is a function, nice');

// function getDouble(num) {
//     return num * 2;
// }

// const four = getDouble(2);

// console.log(`The two by two is ${four}`);

// //Declaration
// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }

// let age = calcAge(2002);

// //Expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// let age2 = calcAge2(2002);

// console.log(age, age2);

// Arrow function

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirementAge = 65 - age;
    return `${firstName} retires at ${retirementAge}.`;
}

console.log(yearsUntilRetirement(2002,'Andrew'));
console.log(yearsUntilRetirement(1991,'Alex'));