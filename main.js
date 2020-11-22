console.log("working");

// Game mechanics code
let playerScore = 0; 
let computerScore = 0; 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) +1); 
}

function computerPlay() {
   let = randomNumber = getRandomInt(3);  
   switch(randomNumber) {
       case 1: 
       //computerChoiceText.textContent = 'Rock';
       return 'rock'; 
       case 2: 
       //computerChoiceText.textContent = 'Paper';
       return 'paper'; 
       case 3: 
      // computerChoiceText.textContent = 'Scissors';
       return 'scissors'
       default: 
        console.log('My apologies something went utterly wrong'); 
        break;
   }
    
}

function playRound(playerSelection, computerSelection) {
    const rock = 'rock'; 
    const paper = 'paper'; 
    const scissors = 'scissors'; 
    if(playerSelection.toLowerCase() === rock.toLowerCase() && 
    computerSelection.toLowerCase() === scissors.toLowerCase()) {
        resultText.textContent = 'You won this round! Rock beats scissors'; 
        console.log(' Rock beats scissors');   
        playerScore++;
       
    } else if(playerSelection.toLowerCase() === paper.toLowerCase() && 
    computerSelection.toLowerCase() === rock.toLowerCase()) {
        resultText.textContent = 'You won this round! Paper beats rock';
        console.log(' Paper beats rock'); 
        playerScore++;
       
    } else if(playerSelection.toLowerCase() === scissors.toLowerCase() && 
    computerSelection.toLowerCase() === paper.toLowerCase()) {
        resultText.textContent = 'You won this round! Scissors beats paper';
        console.log('Scissors beats paper'); 
        playerScore++;
        
    } else if(playerSelection.toLowerCase() === rock.toLowerCase() && 
    computerSelection.toLowerCase() === paper.toLowerCase()) {
        resultText.textContent = 'You lose this round! Paper beats rock';
       console.log('Paper beats rock'); 
       computerScore++;
      
    } else if(playerSelection.toLowerCase() === paper.toLowerCase() && 
    computerSelection.toLowerCase() === scissors.toLowerCase()) {
        resultText.textContent = 'You lose this round! Scissors beats paper';
        console.log('Scissors beats paper'); 
        computerScore++;
       
    } else if(playerSelection.toLowerCase() === scissors.toLowerCase() && 
    computerSelection.toLowerCase() === rock.toLowerCase()) {
        resultText.textContent = 'You lose this round! Rock beats scissors';
        console.log('Rock beats scissors');
        computerScore++;
        
    } else {
       console.log('It is a draw!') 
       
    }
    
}

function game(playerSelection) {
  
    const computerSelection = computerPlay(); 
   // let playerSelection = window.prompt('Choose a rock, paper or scissors');

    playRound(playerSelection.toLowerCase(), computerSelection); 
    console.log(`Score  player: ${playerScore} computer: ${computerScore}  `)
    scoreText.textContent = `You:${playerScore} Computer:${computerScore} `;
    checkIfOver();
}

// computerPlay();

/* 
function gameLoop() {
    for(let i = 0; i < 5; i++) {
        game(); 
    }
    if(playerScore > computerScore) {
        console.log('Congratulations you won the game!'); 
    } else if (playerScore < computerScore) {
        console.log('You lost the game'); 
    } else {
        console.log('Game ended in a draw'); 
    }
}
*/

function checkIfOver() {
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            gameEndText.textContent = 'Game ended. Congratulations you won!'; 
        } else {
            gameEndText.textContent = 'Game ended. Computer won!'; 
        }
       playAgainBtn.style.visibility = "visible";
       rockBtn.disabled = true;
       paperBtn.disabled = true;
       scissorsBtn.disabled = true;
    }
}



// gameLoop();


//UI RELATED CODE. 

const resultText = document.querySelector('#resultText');
// const playerChoiceText = document.querySelector('#playerChoiceText');
// const computerChoiceText = document.querySelector('#computerChoiceText');
const scoreText = document.querySelector("#scoreText"); 
const gameEndText = document.querySelector("#gameEndText"); 
const playAgainBtn = document.querySelector("#playAgainBtn");
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


rockBtn.addEventListener('click', () => {
    
    //playerChoiceText.textContent = 'Rock'; 
    game('rock');
    
});


paperBtn.addEventListener('click', (e) => {
   
    //playerChoiceText.textContent = 'Paper'; 
    game('paper');
   
});


scissorsBtn.addEventListener('click', () => {
  //  playerChoiceText.textContent = 'Scissors'; 
    game('scissors');
});

function resetScore() {
    playerScore = 0; 
    computerScore = 0; 
    scoreText.textContent = `You:${playerScore} Computer:${computerScore} `;
    resultText.textContent = '';
    gameEndText.textContent = ''; 
}


playAgainBtn.addEventListener('click', () => {
    resetScore();
    playAgainBtn.style.visibility = "hidden";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});