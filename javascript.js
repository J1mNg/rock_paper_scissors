const winner_map = {
  "rock":"scissors",
  "scissors":"paper",
  "paper":"rock"
}

function getComputerChoice() {
    const choices = Object.keys(winner_map)
    return choices[Math.floor(Math.random() * choices.length)]
  }

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase() 
    computerSelection = computerSelection.toLowerCase() 

    if (playerSelection == computerSelection) {
      return 0
    } else if (winner_map[playerSelection] == computerSelection) {
      return 1
    } else {
      return -1
    }
}

function game() {
  let playerScore = 0
  let ComputerScore = 0
  let games = 0

  while (games != 5) {
    let playerInput = prompt("What is your move:");
    let computerInput = getComputerChoice()

    let result = playRound(playerInput, computerInput)

    if (result == 0) {
      continue
    } else if (result == 1) {
      playerScore += 1
    } else {
      computerScore += 1
    }

    games += 1
  }

  if (playerScore > ComputerScore) {
    console.log("you are the winner!")
  } else {
    console.log("you lose!")
  }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});