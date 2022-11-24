// let width = 8;
// let height = 8;
// let writeSpaceNext = false;
// let chessboardString = '';

// for (let yaxis = 0; yaxis < height; yaxis++) {

//     for (let xaxis = 0; xaxis < width; xaxis++) {
//         if (writeSpaceNext)
//             chessboardString += ' ';
//         else
//             chessboardString += '#';
//         writeSpaceNext = !writeSpaceNext;
//     }

//     chessboardString += '\n';
//     writeSpaceNext = !writeSpaceNext;
// }

// console.log(chessboardString);

let width = 8;
let height = 8;
let writeSpaceNext = false;
let chessboardString = '';

for (let yaxis = 1; yaxis <= height; yaxis++) {

    if (yaxis % 2 == 0)
        writeSpaceNext = true;
    else
        writeSpaceNext = false;

    for (let xaxis = 1; xaxis <= width; xaxis++) {
        if (writeSpaceNext)
            chessboardString += ' ';
        else
            chessboardString += '#';
        writeSpaceNext = !writeSpaceNext;
    }

    chessboardString += '\n';
}

console.log(chessboardString);