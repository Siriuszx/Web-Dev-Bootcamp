let jhonWeight = 90;
let markWeight = 83;

let johnHeight = 1.85;
let markHeight = 1.75;

let johnBMI = jhonWeight / (johnHeight ** 2);
let markBMI = markWeight / (markHeight ** 2);

let isMarkBMIHigher = markBMI > johnBMI;

console.log(isMarkBMIHigher);

if (isMarkBMIHigher) {
    console.log(`Mark's BMI (${markBMI}) is higher.`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher.`);
}