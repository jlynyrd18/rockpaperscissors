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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(`You tied you both picked ${playerSelection}`)
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        alert(`You lose, ${computerSelection} covers ${playerSelection}`)
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        alert(`You win, ${playerSelection} smashes ${computerSelection}`)
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert(`You win, ${playerSelection} covers ${computerSelection}`)
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        alert(`You lose, ${computerSelection} cuts ${playerSelection}`)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        alert(`You lose, ${computerSelection} smashes ${playerSelection}`)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        alert(`You win, ${playerSelection} cuts ${computerSelection}`)
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


//let computerScore = 0;
//let playerScore = 0;

/*document.createElement()
create scoreboard as whole and number for each side 3 divs
buttons in box says choices
*/
const board = document.createElement("div");
board.id = "scoreboard";
board.textContent = "Scoreboard";
board.style.border = "3px solid black";

document.body.append(board);

//Each players score
const compScore = document.createElement("div");
const playScore = document.createElement("div");
compScore.textContent = 0;
playScore.textContent = 0;
compScore.id = "computerScore";
playScore.id = "playerScore";
board.appendChild(playScore);
board.appendChild(compScore);
