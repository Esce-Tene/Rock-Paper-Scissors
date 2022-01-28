const playerSelection = "ROCK";
const computerSelection = computerPlay();


function computerPlay() {
  const options = ["ROCK" , "PAPER" , "SCISSORS"];
  const randomSelection =  options[Math.floor(Math.random()*options.length)];
  return randomSelection;
}


function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw"
  }
  else {
    return "You lose!"
  }
}

