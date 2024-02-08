function getComputerChoice() {    // Random selection func for computer //
  const strings = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * strings.length);

  return strings[randomIndex];
}

function playRound(playerSelection, computerSelection) {   // Single round logic //
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {  // Game function for best of 5 rounds and declare the winner //
  const computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  // Update scores and display result
  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }
  // Update DOM to display scores and results
  document.getElementById("results").innerHTML = `
    <p>Player Score: ${playerScore}</p>
    <p>Computer Score: ${computerScore}</p>
    <p>${result}</p>
  `;

  // Announce winner if one player reaches 5 points
  if (playerScore === 5) {
    alert("Player Wins!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Computer Wins!");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  game("rock");
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  game("paper");
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", () => {
  game("scissors");
});
