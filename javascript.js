let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll(`button`);


function computerPlay() {
  let options = ["rock" , "paper" , "scissors"];
  let randomSelection =  options[Math.floor(Math.random() *options.length)];
  return randomSelection;
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = document.getElementById('results');
  let pScore = document.getElementById('playerScore');
  let cScore = document.getElementById('computerScore');

  if (playerSelection === computerSelection){
    result.textContent = `Draw`
  }  
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    pScore.textContent = `Player: ${playerScore}`;
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
  }  
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    pScore.textContent = `Player: ${playerScore}`;
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
  } 
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    pScore.textContent = `Player: ${playerScore}`;
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
  } 
  else {
    computerScore++
    cScore.textContent = `Computer: ${computerScore}`;
    result.textContent =  `You lose, ${computerSelection} beats ${playerSelection}.`
  }
  if (playerScore == 5 && playerScore > computerScore) {
    result.textContent = `You won! Your ${playerSelection} beats my ${computerSelection}.`
    disableButtons();
  }
  else if (computerScore == 5 && computerScore > playerScore) {
    result.textContent = `You lost. My ${computerSelection} beats your ${playerSelection}.`
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}
 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.value);
  })
})

