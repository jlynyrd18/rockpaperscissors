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
        computerScore++;
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
        computerScore++;
        alert(`You lose, ${computerSelection} cuts ${playerSelection}`)
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        alert(`You lose, ${computerSelection} smashes ${playerSelection}`)
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        alert(`You win, ${playerSelection} cuts ${computerSelection}`)
    }
}

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    addWin();
    winner();
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    addWin();
    winner();
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
    addWin();
    winner();
});

//scoreboard
const board = document.createElement("div");
board.id = "scoreboard";
board.textContent = "Scoreboard";
board.style.border = "3px solid black";
document.body.append(board);

//score variables
let computerScore = 0;
let playerScore = 0;

//Each players general name
const compName = document.createElement("div");
const playName = document.createElement("div");
compName.textContent = "Computer";
playName.textContent = "Player";
compName.id = "computer";
playName.id = "player";
board.appendChild(playName);
board.appendChild(compName);

//each players score
const compScore = document.createElement("div");
const playScore = document.createElement("div");
compScore.textContent = "Score: 0";
playScore.textContent = "Score: 0";
compScore.id = "compScore";
playScore.id = "playScore"
board.appendChild(compScore);
board.appendChild(playScore);

//tally win function? query selector with template string literal?
function addWin() {
    document.querySelector("#compScore").textContent = `Score: ${computerScore}`;
    document.querySelector("#playScore").textContent = `Score: ${playerScore}`;
}

//winner funciton to check if either score is 5, if is return who won the game, if not do nothing until then
function winner() {
    if (computerScore == 5) {
        alert("Dang the coputer won this time.");
    }else if (playerScore == 5) {
        alert("Congradulations! You beat the computer.");
    }else {
        return;
    }
}
//need to add a reset button that will set scores to 0 to allow restarting
const resetGame = document.createElement("button");
resetGame.textContent = "Reset";
resetGame.className = "reset";
document.body.append(resetGame);
resetGame.addEventListener("click", function() {
    computerScore = 0;
    playerScore = 0;
    location.reload();
})