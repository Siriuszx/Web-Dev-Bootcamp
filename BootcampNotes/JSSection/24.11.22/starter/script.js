'use strict'
// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Go to coding meetup');
//         break;
//     default:
//         console.log('Take a break today');
//         break;
// }

// //becoming less and less used...

// if ('notempty' && 'notempty') console.log('ping');

// const isMature = false;
// console.log(isMature ? 'he can drink wine' : 'he isn\'t mature enough');

let bill = 400;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(`Bill: $${bill}\nTip: $${tip}\nTotal: $${total}`);

let car = {
    model : 'BMW',
    year : 2002,
    owner : 'Michael Jakson',
    purchaseYear : 2020,
    horsepower : 200000000
}

let myFunc = function logCarInfo(car) {
    console.log(car.model,car.year,car.owner); 
}

myFunc(car);