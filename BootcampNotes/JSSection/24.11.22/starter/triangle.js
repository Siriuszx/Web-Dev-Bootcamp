let n = 7;
let result = '';

for (let yaxis = 0; yaxis < n; yaxis++) {

    for (let xaxis = 0; xaxis <= yaxis; xaxis++) {
        result += '#';
    }

    result += '\n';
}

console.log(result);