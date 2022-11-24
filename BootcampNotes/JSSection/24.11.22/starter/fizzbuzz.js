let countTo = 100;
let ouputString = '';

for (let i = 1; i <= countTo; i++) {

    ouputString = '';

    if (i % 3 == 0)
        ouputString += 'Fizz';
    if (i % 5 == 0)
        ouputString += 'Buzz';
    if (!ouputString) 
        ouputString = i;

    console.log(ouputString);
}