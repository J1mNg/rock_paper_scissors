const winner_map = {
  "rock":"scissors",
  "scissors":"paper",
  "paper":"rock"
};

let games = 0
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = Object.keys(winner_map)
    return choices[Math.floor(Math.random() * choices.length)]
  };

function playRound(playerInput, computerInput) {

    if (playerInput == computerInput) {
      return "draw"
    } else if (winner_map[playerInput] == computerInput) {
      return "win"
    } else {
      return "loss"
    }
};

function updateScores(result) {
  if (result == "win") {
    playerScore += 1;
    document.getElementById("player-score").innerHTML = playerScore
  } else if (result == "loss") {
    computerScore += 1
    document.getElementById("computer-score").innerHTML = computerScore
  }
};


function updateRoundResult(result) {
  let result_display = document.getElementById("round-result")

  if (result == "win") {
    result_display.innerHTML = "You Win!"
  } else if (result == "loss") {
    result_display.innerHTML = "You Lose!"    
  } else {
    result_display.innerHTML = "Draw!"   
  }
};

function updateBoard(playerInput, computerInput) {
  document.getElementById("player-move").innerHTML = playerInput
  document.getElementById("computer-move").innerHTML = computerInput
};

function gameEnd(totalGames) {
  if (games == totalGames) {
    return 1
  }
  
  games += 1

  return 0
};




const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerInput = button.id
    let computerInput = getComputerChoice()

    console.log(playerInput)
    console.log(computerInput)

    let result_round = playRound(playerInput, computerInput)

    updateScores(result_round)
    updateRoundResult(result_round)
    updateBoard(playerInput, computerInput)

    let gameEndStatus = gameEnd(5)

    if (gameEndStatus == 1) {
      if (playerScore > computerScore) {
        alert("you are the winner!")
      } else {
        alert("you lose!")
      }
    }

  });  
});