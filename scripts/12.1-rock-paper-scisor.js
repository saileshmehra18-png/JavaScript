//converted the json string back to js code to assign in a variable
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateScoreElement(); //this one to show the score when page loads

function pickComputerMove() {
    const randomnumber = Math.random();

    let computermove = '';

    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computermove = 'Rock'
    } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        computermove = 'Paper'
    } else {
        computermove = 'Scissors'
    }

    return computermove;
}
let intervalId;
let isplaying = false;

function autoPlay(){
    if (!isplaying){
    intervalId = setInterval(function () {
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isplaying = true;

    }else{
        clearInterval(intervalId);
        isplaying=false;
    }
    
}

function playGame(playerMove) {
    const computermove = pickComputerMove();

    let result = '';
    if (playerMove === 'Scissors') {
        if (computermove === 'Rock') {
            result = 'You lose';
        } else if (computermove === 'Paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    } else if (playerMove === 'Rock') {
        if (computermove === 'Rock') {
            result = 'Tie';
        } else if (computermove === 'Paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else {
        if (computermove === 'Rock') {
            result = 'You win';
        } else if (computermove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }
    }

    if (result === "You win") {
        score.wins += 1;
    } else if (result === "You lose") {
        score.losses += 1;
    } else {
        score.ties += 1
    }

    localStorage.setItem('score', JSON.stringify(score)); //converting in json to save in local storage


    updateScoreElement(); //this one to update the scores
    document.querySelector('.js-result').innerHTML
        = result;

    const playerImage = playerMove.toLowerCase();
    const computerImage = computermove.toLowerCase();

    document.querySelector('.js-move').innerHTML
        = `your <img src="../images/${playerImage}-emoji.png"> comp <img src="../images/${computerImage}-emoji.png">`;

} 