//DOM data
let DOMHighscore = document.querySelector('.highscore');
let DOMCurScore = document.querySelector('.score');
let DOMScoreInput = document.querySelector('.guess');
let DOMStatusMSG = document.querySelector('.message');
let DOMRandNumStatusMSG = document.querySelector('.number');
let DOMBodyElement = document.querySelector('body');
//
//Game data
let randNum = 0;//Math.trunc(Math.random() * 20);
let curScore = 20;
let playerHighscore = 0;
let guessNum = 0;
//

//Game higherOrLower, update score, give player TIP
function updateHigherOrLower() {

    let guessNum = DOMScoreInput.value; 

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
    else if (guessNum == randNum) {
        playerHighscore = curScore;
        DOMHighscore.textContent = playerHighscore;
        DOMRandNumStatusMSG.textContent = randNum;
        DOMStatusMSG.textContent = 'Correct number!';
        DOMBodyElement.style.backgroundColor = '#60b347';
    }

}

function restartGame() {
    setRndNum();
    curScore = 20;
    DOMCurScore.textContent = curScore;
    DOMBodyElement.style.backgroundColor = '#222';
    DOMRandNumStatusMSG.textContent = '?';
    DOMStatusMSG.textContent = 'Start guessing...';
    console.log(randNum);
}

function setRndNum() {
    do{
        randNum = Math.trunc(Math.random() * 20);
    } while (randNum == 0)
}

document.querySelector('.again').addEventListener('click', restartGame);
document.querySelector('.check').addEventListener('click', updateHigherOrLower);

console.log(randNum);