function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random * options.length)];
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock": return "tie";
                case "paper": return "You lose! Paper beats rock";
                case "scissors": return "You win, Rock beats scissors";
            }
        case "paper":
            switch(computerSelection) {
                case "rock": return "You win, paper beats rock";
                case "paper": return "Tie";
                case "scissors": return "You lose, Scissors beats paper";
            }
        case "scissors":
            switch(computerSelection) {
                case "rock": return "You lose, rock beats scissors";
                case "paper": return "You win, scissors beats paper";
                case "scissors": return "Tie";
            }
    }
}

const playerSelection = prompt("Enter your selection");
playOneRound(playerSelection, getComputerChoice());