function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3) + 1
    if (randomChoice == 1) {
        return "rock"
    } else if (randomChoice == 2) {
        return "paper"
    } else if (randomChoice == 3){
        return "scissors"
    }
}

const buttons = document.querySelectorAll('button')
function disableBtn() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    let result = "";
    if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock" ) ||
        (playerSelection == "scissors" && computerSelection == "paper" )) {
        playerScore +=1
        result = (`You win! ${playerSelection} beats ${computerSelection}`)
        if (playerScore == 5) {
            result = "You won the game!"
            disableBtn()
        }
    } else if (
        (playerSelection == "rock" && computerSelection == "paper" )||
        (playerSelection == "scissors" && computerSelection == "rock" )||
        (playerSelection == "paper" && computerSelection == "scissors" )) {
        computerScore +=1
        result = (`You lose! ${computerSelection} beats ${playerSelection}`)
        }
        if (computerScore == 5) {
            result = "You lose the game!"
            disableBtn()
    } else if (playerSelection == computerSelection) {
        result = `Tie! We both Selected ${playerSelection}`
    }
    document.querySelector('.result').textContent = result
    return
}
let playerScore = 0;
let computerScore = 0;
function playSound(e) {
    const audio = document.querySelector('audio')
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.className);
        playSound();
    })
})

const restartBtn = document.querySelector('.restart')

restartBtn.addEventListener('click', function(){
    buttons.forEach(elem => {
        elem.disabled = false
    })
    playerScore = 0;
    computerScore = 0;
    let result = document.querySelector('.result')
    result.textContent = ''
})