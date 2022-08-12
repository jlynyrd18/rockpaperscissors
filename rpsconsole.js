function (getComputerChoice) {
    choice = Math.floor(Math.random() * 10);
    if (choice <= 3) {
        choice = "Rock";
    }
    else if (choice <= 6) {
        choice = "Paper";
    }
    else {
        choice = "scissors";
    }
}