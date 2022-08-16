//First a function that will produce a random choice from 3 choices
//trying to use numbers to tie to choice and assign

function computerChoice() {
    var choice = Math.floor(Math.random() * 10);
    if (choice <= 3) {
        choice = "rock";
    }
    else if (choice <= 6) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    return choice;
}
console.log(computerChoice());

//Player selection, needs to be case insensitive so users can input rock, ROCK, RocK
let playerInput = prompt("Please pick one", "Rock Paper or Scissors");
let playerChoice = playerInput.toLowerCase();
console.log(playerChoice);

//function for a single round of rock paper scissors
//take two parameters playerSelection and computerSelection
//then return string that declares the winner of the round
function battle(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "It's a tie, try again."
    }
    else if ()
}