//DOM data
let DOMHighscore = document.querySelector('.highscore');
let DOMCurScore = document.querySelector('.score');
let DOMScoreInput = document.querySelector('.guess');
let DOMStatusMSG = document.querySelector('.message');
let DOMRandNumStatus = document.querySelector('.number');
//
//Game data
let randNum = Math.trunc(Math.random() * 20);
let curScore = 20;
let playerHighscore = 0;
let guessNum = 0;
//

//Game higherOrLower, update score, give player TIP
function updateHigherOrLower(guessNum) {

    if ((guessNum - randNum) > 0) {
        curScore--;
        DOMCurScore.textContent = curScore;
        DOMStatusMSG.textContent = 'Number is too high!';
    }
    else if ((guessNum - randNum) < 0) {
        curScore--;
        DOMCurScore.textContent = curScore;        
        DOMStatusMSG.textContent = 'Number is too low!';
    }
    else {
        playerHighscore = curScore;
        DOMHighscore.textContent = playerHighscore;
        DOMRandNumStatus.textContent = curScore;
        DOMStatusMSG.textContent = 'Correct number!';
    }
}

function restartGame() {
    DOMRandNumStatus.textContent = '?';
    DOMStatusMSG.textContent = 'Start guessing...';
    curScore = 20;
}


console.log(randNum);

console.log(higherOrLower(10));