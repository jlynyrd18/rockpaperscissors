//First a function that will produce a random choice from 3 choices
//trying to use numbers to tie to choice and assign

function getComputerChoice() {
    var choice = Math.floor(Math.random() * 10);
    if (choice <= 3) {
        choice = "Rock";
    }
    else if (choice <= 6) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
}
console.log(getComputerChoice());
