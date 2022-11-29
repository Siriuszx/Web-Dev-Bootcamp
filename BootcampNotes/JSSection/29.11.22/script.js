let friends = ['Steve', 'Alex', 'Peter'];
console.log(friends);

const years = new Array(2002, 2003, 2004);
console.log(years);

console.log(years.length);

friends = ['Andrey', 'Me'];
console.log(friends);

let person = {
    firstName: 'Andrew',
    age: 20,
    friends: friends
}

console.log('My friends', person.friends);

function calcTip(value) {
    if (value <= 300 && value >= 50)
        return value * 0.15;
    else
        return value * 0.2;
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(`Bills: ${bills}`);
console.log(`My tips: ${tips}`);
console.log(`Total: ${total}`);