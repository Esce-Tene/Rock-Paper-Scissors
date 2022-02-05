let playerSelection = promptPlayer().toLowerCase();
let computerSelection = computerPlay();
let playerScore = 0
let computerScore = 0

// Randomizes the three array items and then returns.
function computerPlay() {
  let options = ["rock" , "paper" , "scissors"];
  let randomSelection =  options[Math.floor(Math.random() *options.length)];
  return randomSelection;
}

// Decides the winner from the arguments given
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return `Draw`;
  }  
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return `You win, ${playerSelection} beats ${computerSelection}`;
  }  
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return `You win, ${playerSelection} beats ${computerSelection}`;
  } 
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return `You win, ${playerSelection} beats ${computerSelection}`;
  }   
  else {
    computerScore++
    return `You lose, ${computerSelection} beats ${playerSelection}.`
  }
}

function promptPlayer() {
  let askPlayer = prompt("Rock, Paper or Scissors?").toLowerCase();
    return askPlayer;    
}

console.log(playRound(playerSelection, computerSelection));

function game() {
  for(let i=0;i<5;i++){
    promptPlayer();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }
}

function scoreBoard() {
  if (playerScore > computerScore) {
    return `You won! ${playerScore} - ${computerScore}.`
  }
  else if (computerScore > playerScore) {
    return `You lose. ${playerScore} - ${computerScore}.`  
  }  
  else if (playerScore === computerScore) {
    return `Draw. ${playerScore} - ${computerScore}.`
  }  

}

game();
console.log(scoreBoard());
