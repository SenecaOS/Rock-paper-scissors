const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let computerChoice = null;
let humanChoice = null;


playGame();

function playGame(){
    for(let i = 0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        getScore();
    }
}

function getScore(){
    console.log(`Human player has score: ${humanScore}\nComputer has score: ${computerScore}`)
}

function getComputerChoice() {
    let randomDigit = Math.floor(Math.random() * 3);
    computerChoice = choice[randomDigit];
    return choice[randomDigit];
}

function getHumanChoice() {
    humanChoice = prompt("Rock paper scissors!");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice == "scissors" || computerChoice == "scissors") && (humanChoice == "rock" || computerChoice == "rock")) {
        humanChoice == "scissors" ? incrementAndPrintWinner("computer") : incrementAndPrintWinner("human");
    }
    else if((humanChoice == "paper" || computerChoice == "paper") && (humanChoice == "rock" || computerChoice == "rock")){
        humanChoice == "rock" ? incrementAndPrintWinner("computer") : incrementAndPrintWinner("human");
    }
    else if((humanChoice == "scissors" || computerChoice == "scissors") && (humanChoice == "paper" || computerChoice == "paper")){
        humanChoice == "paper" ? incrementAndPrintWinner("computer") : incrementAndPrintWinner("human"); 
    }
    else{
        console.log(`Human chose ${humanChoice} and computer chose ${computerChoice}\nIt's a draw!`)
    }

}

function incrementAndPrintWinner(winner) {
    if (winner == "human") {
        console.log(`Human chose ${humanChoice} and computer chose ${computerChoice}\nHuman wins!`)
        humanScore++;
    }
    else {
        console.log(`Human chose ${humanChoice.toLowerCase()} and computer chose ${computerChoice}\nComputer wins!`)
        computerScore++;
    }

}