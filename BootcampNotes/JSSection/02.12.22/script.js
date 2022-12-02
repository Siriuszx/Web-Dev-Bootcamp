for (let rep = 1; rep <= 10; rep++) {
    console.log(`rep #${rep}`);
}

let nums = [1,3,5,7,1,2,4,7];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

let curYear = 2022;
let birthYears = [1992,1999,2003,1995,2001,2002,2010,1970];
let ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages.push(curYear - birthYears[i]);
}

console.log(ages);