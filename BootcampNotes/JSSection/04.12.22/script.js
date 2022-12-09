let DOMHighscore = document.querySelector('.highscore');
let DOMCurScore = document.querySelector('.score');
let DOMScoreInput = document.querySelector('.guess');
let DOMStatusMSG = document.querySelector('.message');
let DOMRandNumStatusMSG = document.querySelector('.number');
let DOMBodyElement = document.querySelector('body');

let randNum = 0;
let curScore = 0;
let playerHighscore = 0;
let guessNum = 0;

function setRndNum() {
    do {
        randNum = Math.trunc(Math.random() * 20);
    } while (randNum == 0)
}

function updateGame(guessNum) {
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

function validateScoreInput() {
    let inputNum = Number(DOMScoreInput.value);

    if (curScore > 0) {
        if (typeof (inputNum) == 'number' && inputNum != 0) {
            updateGame(inputNum);
        } else {
            DOMStatusMSG.textContent = 'Please enter valid number.'
        }
    } else {
        DOMStatusMSG.textContent = 'You lost. Restart the game';
    }
}

function newGame() {
    setRndNum();
    curScore = 20;
    DOMCurScore.textContent = curScore;
    DOMBodyElement.style.backgroundColor = '#222';
    DOMRandNumStatusMSG.textContent = '?';
    DOMStatusMSG.textContent = 'Start guessing...';
}


newGame()
document.querySelector('.again').addEventListener('click', newGame);
document.querySelector('.check').addEventListener('click', validateScoreInput);