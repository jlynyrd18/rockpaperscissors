function getComputerChoice () {
    let ComputerChoice = Math.floor(Math.random() * 3);
    if (ComputerChoice === 0) {
        return "rock"
    }
    else if (ComputerChoice === 1) {
        return "paper"
    }
    else if (ComputerChoice === 2) {
        return "scissors"
    }
}
//console.log(getComputerChoice());
let playerSelect = "rock";
let playerSelection = playerSelect.toLowerCase();
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You tied you both picked ${playerSelection}`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return `You lose, ${computerSelection} covers ${playerSelection}`
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win, ${playerSelection} smashes ${computerSelection}`
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win, ${playerSelection} covers ${computerSelection}`
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose, ${computerSelection} cuts ${playerSelection}`
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return `You lose, ${computerSelection} smashes ${playerSelection}`
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win, ${playerSelection} cuts ${computerSelection}`
    }
}
//console.log(playRound(playerSelection, computerSelection));

// Need a function here called game that has the computer and player play five rounds and keeps score
// best if use a for loop, also tells who's the winner at the end of the five rounds
function game() {
    for (let score = 0; score < 5; score++) {
        playRound(playerSelection, computerSelection);
    }
    if (playerScore >= 5) {
        return "Congradulations! You win the game!"
    }
    else if (computerScore >= 5) {
        return "You lost, try working on your throws."
    }
    else {
        return "You tied the computer, not too bad."
    }
}
console.log(game());