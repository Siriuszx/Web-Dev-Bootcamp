// let z, y;
// z = y = 10 - 10 - 10; //Assignment is RIGHT to LEFT
// console.log(z, y);

const fName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;

const jonas = `He's ${fName} a 46-year-old ${job}`;
console.log(jonas);

console.log(`First line
Second
Thrid`);

//--------------------------------------

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('He can drive.')
} else {
    const yearsLeft = 18 - age;
    console.log(`Wait ${yearsLeft} more years.`);
}