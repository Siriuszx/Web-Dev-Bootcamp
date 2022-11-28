let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(teamOneAvg, teamTwoAvg) {
    
    if (teamOneAvg > teamTwoAvg * 2) {
        console.log('Team One Wins');
    }
    else if (teamTwoAvg > teamOneAvg * 2){
        console.log('Team Two Wins');
    }
    else {
        console.log('No team wins');
    }
}

//Test 1

let teamOneAvg = calcAverage(44, 23, 71);
let teamTwoAvg = calcAverage(65, 54, 49);

console.log(checkWinner(teamOneAvg,teamTwoAvg));

//Test 2

teamOneAvg = calcAverage(85,54,41);
teamTwoAvg = calcAverage(23,34,27);

console.log(checkWinner(teamOneAvg,teamTwoAvg));


