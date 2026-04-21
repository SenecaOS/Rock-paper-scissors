const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let computerChoice = null;


/*
 const input = document.querySelector("input");
        const ul = document.querySelector("ul");
        const btn = document.querySelector("button");
        btn.addEventListener("click", e =>{
            e.preventDefault();
            const itemValue = input.value;
            input.value = "";
            const list = document.createElement("li");
            const span = document.createElement("span");
            const newBtn = document.createElement("button");
            span.textContent = itemValue + "    ";
            newBtn.textContent = "Delete";
            list.append(span, newBtn);
            ul.append(list);

*/
const buttonsDiv = document.querySelector("buttons");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
buttonsDiv.append(rock, paper, scissors);



const announcement = document.querySelector("div");
const roundWinner = document.createElement("p");
roundWinner.textContent = "‎ ";
announcement.append(roundWinner);




buttons = document.querySelectorAll("button");

let lastPressed = 0;

addButtonFunctionality();

function addButtonFunctionality(){
    for(let i = 0; i<buttons.length; i++){
    buttons[i].textContent = choice[i];
    buttons[i].addEventListener("click", e =>{
        if(computerScore != 5 && humanScore != 5){
            e.preventDefault();
            lastPressed = i;
            playRound(choice[i], getComputerChoice());
        }

});
}
}


const runningScore = document.createElement("h1");
announcement.append(runningScore);




function getScore(){
    if(humanScore == 5){
        runningScore.textContent = `Human player has score: ${humanScore}\nComputer has score: ${computerScore}. Human wins!`;
        return;

    }
    else if(computerScore == 5){
        runningScore.textContent = `Human player has score: ${humanScore}\nComputer has score: ${computerScore}. Computer wins!`;
        return;

    }
    runningScore.textContent = `Human player has score: ${humanScore}\nComputer has score: ${computerScore}`;
}

function getComputerChoice() {
    let randomDigit = Math.floor(Math.random() * 3);
    computerChoice = choice[randomDigit];
    return choice[randomDigit];
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
        roundWinner.textContent = `Human chose ${humanChoice} and computer chose ${computerChoice} - It's a draw!`;
    }

}

function incrementAndPrintWinner(winner) {
    if (winner == "human") {
        roundWinner.textContent = `Human chose ${choice[lastPressed]} and computer chose ${computerChoice} - Human wins!`;
        humanScore++;
    }
    else {
        roundWinner.textContent = `Human chose ${choice[lastPressed]} and computer chose ${computerChoice} - Computer wins!`;
        computerScore++;
    }
    getScore();

}