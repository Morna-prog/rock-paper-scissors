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

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" ) {
        playerScore +=1
        return "You win! Rock beats Scissors"

    } else if (playerSelection == "paper" && computerSelection == "rock" ) {
        playerScore +=1
        return "You win! Paper beats Rock"

    } else if (playerSelection == "scissors" && computerSelection == "paper" ) {
        playerScore +=1
        return "You win! Scissors beats Paper"

    } else if (playerSelection == "rock" && computerSelection == "paper" ) {
        computerScore +=1
        return "You lose! Paper beats Rock"

    } else if (playerSelection == "scissors" && computerSelection == "rock" ) {
        computerScore +=1
        return "You lose! Rock beats scissors"

    } else if (playerSelection == "paper" && computerSelection == "scissors" ) {
        computerScore +=1
        return "You lose! Scissors beat paper"

    }else if (playerSelection == computerSelection) {
        return "Tie! You selected the same as the computer!"
    } else {
        return "Please recharge and input a valid option"
    }
}
let playerScore = 0;
let computerScore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if(playerScore > computerScore) {
        console.log(`Your score is ${playerScore}, The computer score is ${computerScore}, You win!`)
    } else if (playerScore < computerScore) {
        console.log(`Your score is ${playerScore}, The computer score is ${computerScore}, You lose!`)
    } else {
        console.log(`Your score is ${playerScore}, The computer score is ${computerScore}, Its a tie!`)
    }
}
game()