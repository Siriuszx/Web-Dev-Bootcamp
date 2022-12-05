
//Game data
let randNum = Math.trunc(Math.random() * 20);
let curScore = 20;
let playerHighscore = 0;
let guessNum = 0;
//

//Game higherOrLower, update score, give player TIP
function higherOrLower(guessNum) {

    if ((guessNum - randNum) > 0) {
        //DOM update
        curScore--;
        return 'Number is too high!';
    }
    else if ((guessNum - randNum) < 0) {
        curScore--;
        //DOM update
        return 'Number is too low!';
    }
    else {
        //call end game func
        playerHighscore = curScore;
        return 'Correct number!'
    }
}

function restartGame() {
    //DOM
    curScore = 20;
}


console.log(randNum);

console.log(higherOrLower(10));