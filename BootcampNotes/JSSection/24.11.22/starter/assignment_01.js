// const scoreDolphins = (96 + 100 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Draw');
// }
 
const scoreDolphins = (96 + 100 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win');
} else if (scoreKoalas > scoreDolphins >= 100) {
    console.log('Koalas win');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Draw');