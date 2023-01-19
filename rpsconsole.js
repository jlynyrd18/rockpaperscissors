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

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
});
