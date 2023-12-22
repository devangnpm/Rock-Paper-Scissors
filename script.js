function getComputerChoice(params) {
  const strings = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * strings.length);

  return strings[randomIndex];
}

let playerScore = 0;
let computerScore = 0;
const gameResults = game();
console.log(gameResults);

function game() {
let result = "";

  for (let round = 0; round < 5; round++) {
  const playerSelection = prompt("Select your choice from Rock,Paper or Scissor");
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();

    playRound(playerSelectionLower,computerSelection);
   console.log(playerScore, computerScore);
    if (playerScore === 3) {
      result = "Player Wins"
      return result;
    }
    else if (computerScore === 3) {
      result = "Computer Wins!"
      return result;
    }
    else if (computerScore && playerScore === 3) {
      result = "Match Tied!"
    }
  }
} 

function playRound(playerSelectionLower, computerSelection) {
  if (playerSelectionLower === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelectionLower == "rock" && computerSelection == "scissors") ||
    (playerSelectionLower == "paper" && computerSelection == "rock") ||
    (playerSelectionLower == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
    return `You Win! ${playerSelectionLower} beats ${computerSelection}`;
  } else {
    computerScore++
    return `You Lose! ${computerSelection} beats ${playerSelectionLower}`;
  }
}
