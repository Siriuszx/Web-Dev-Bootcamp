let bills = [200, 300, 700, 350, 100, 140, 270, 240, 180, 1000];
let tips = [];
let total = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300)
        return bill * 0.15;
    else
        return bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(bills[i] + tips[i]);
}

console.log(total);