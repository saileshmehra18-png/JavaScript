//converted the json string back to js code to assign in a variable
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
}
function ressetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}
function confirmResset(){
    document.querySelector('.js-resset-confirmation').innerHTML= `Are you sure you want to Resset the scores <button class="js-yes-button">Yes</button>
    <button class="js-no-button">No</button>`

    document.querySelector('.js-yes-button').addEventListener('click', () => {
        ressetScore();
        document.querySelector('.js-resset-confirmation').innerHTML = '';
    })

    document.querySelector('.js-no-button').addEventListener('click', () => {
        document.querySelector('.js-resset-confirmation').innerHTML = '';
    })
}
document.querySelector('.js-resset').addEventListener('click',()=>{
    // ressetScore();
    confirmResset();
})

document.body.addEventListener('keydown',(event)=>{
    if (event.key==='Backspace'){
        // ressetScore();
        confirmResset();
    }
})



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

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='a'){
        autoPlay();
    }
})

document.querySelector('.auto-play-button').addEventListener('click', ()=>{
    autoPlay();
})

let intervalId;
let isplaying = false;

function autoPlay(){
    if (!isplaying){
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        document.querySelector('.auto-play-button').innerHTML='Stop Playing'
        isplaying = true;
        
    }else{
        clearInterval(intervalId);
        isplaying=false;
        document.querySelector('.auto-play-button').innerHTML = 'Auto Play'
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('Rock');
})
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('Paper');
})
document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('Scissors');
})

document.body.addEventListener('keydown', (event)=>{
    if (event.key==='r'){
        playGame('Rock');
    }else if (event.key==='p'){
        playGame('Paper');
    }else if (event.key==='s'){
        playGame('Scissors');
    }
})

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
    
    