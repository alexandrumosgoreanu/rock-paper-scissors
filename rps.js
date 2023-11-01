function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
    
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`player: ${playerSelection}, computer: ${computerSelection}`)
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock": return 0;
                case "paper": return 1;
                case "scissors": return -1;
            }
        case "paper":
            switch(computerSelection) {
                case "rock": return 1;
                case "paper": return 0;
                case "scissors": return -1;
            }
        case "scissors":
            switch(computerSelection) {
                case "rock": return -1;
                case "paper": return 1;
                case "scissors": return 0;
            }
    }
}

function checkWin() {
    if(playerScore.textContent == 5) {
        resetBtn.style.visibility = 'visible';
        result.textContent = "You won the game! Reset to play again";
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }
    else if(computerScore.textContent == 5) {
        resetBtn.style.visibility = 'visible';
        result.textContent = "You lost the game! Reset to play again";
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;
        paperBtn.disabled = true;
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const result = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');


playerScore.textContent = "0";
computerScore.textContent = "0";
result.textContent = "Choose";
resetBtn.style.visibility = 'hidden';

rockBtn.addEventListener('click', () => {
    const res = playOneRound("rock", getComputerChoice());
    console.log(res)
    if(res == 1) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        result.textContent = "You win!";
    }
    else if(res == 0)
        result.textContent = "Tie";
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        result.textContent = "You lose!";
    }
    checkWin();
});

paperBtn.addEventListener('click', () => {
    const res = playOneRound("paper", getComputerChoice());
    if(res == 1) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        result.textContent = "You win!";
    }
    else if(res == 0)
        result.textContent = "Tie";
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        result.textContent = "You lose!";
    }
    checkWin();
});

scissorsBtn.addEventListener('click', () => {
    const res = playOneRound("scissors", getComputerChoice());
    if(res == 1) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        result.textContent = "You win!";
    }
    else if(res == 0)
        result.textContent = "Tie";
    else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        result.textContent = "You lose!";
    }
    checkWin();
});

resetBtn.addEventListener('click', () => {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    result.textContent = "Choose";
    resetBtn.style.visibility = 'hidden';
    rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled = false;
});