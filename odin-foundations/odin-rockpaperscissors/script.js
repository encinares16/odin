let yourScore = 0;
let computerScore = 0;
const restart = document.getElementById('restart');
const buttonGroup = document.getElementById('buttons')

const inputs = document.querySelectorAll('input')
inputs.forEach(button => {
  button.addEventListener('click', function(){
    play(button.value.toLowerCase())
  })
})

function getComputerChoice(x){
  const choices = ["rock", "paper", "scissors"]
  return x = choices[Math.floor(Math.random() * 3)]
}

function checkScore(yourScore,computerScore){
  if(yourScore === 5){
    buttonGroup.style.display = "none"
    restart.style.display = "block"
    console.log("You Win, Reload to restart the game!");
  } else if (computerScore === 5){
    buttonGroup.style.display = "none"
    restart.style.display = "block"
    console.log("Game Over, You want to play again?");
  }
}

function play(playerSelection){
  const computerSelection = getComputerChoice()
  switch (true) {
    case playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors":
      return document.getElementById('result').innerHTML = `Player: ${playerSelection} <br> CPU: ${computerSelection} <br><br> GAME TIE!\n`, document.getElementById('computerScore').innerHTML = `${computerScore}`

    case playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock":
      computerScore += 1
      checkScore(yourScore,computerScore)
      return document.getElementById('result').innerHTML = `Player: ${playerSelection} <br> CPU: ${computerSelection} <br><br> YOU LOSE!\n`, document.getElementById('computerScore').innerHTML = `${computerScore}`
    
    case playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors":
      yourScore += 1 
      checkScore(yourScore,computerScore)

      return document.getElementById('result').innerHTML = `Player: ${playerSelection} <br> CPU: ${computerSelection} <br><br> YOU WIN!\n`, document.getElementById('yourScore').innerHTML = `${yourScore}`
    default:
      break;
  }
}

restartGame = () => {
  yourScore = 0;
  computerScore = 0;
  document.getElementById('yourScore').innerHTML = `${yourScore}`
  document.getElementById('computerScore').innerHTML = `${computerScore}`
  console.log("restart")
  restart.style.display = "none"
  buttonGroup.style.display = "block"
}
