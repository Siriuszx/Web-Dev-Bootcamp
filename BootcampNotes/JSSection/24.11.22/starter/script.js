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

let bill = Number(prompt('Bill value:'));
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(`Bill: $${bill}\nTip: $${tip}\nTotal: $${total}`);