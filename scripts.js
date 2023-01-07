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

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper or scissors").toLowerCase()
    computerSelection = getComputerChoice()

    if(playerSelection == "rock" && computerSelection == "scissors" ) {
        console.log("You win! Rock beats Scissors")

    } else if (playerSelection == "paper" && computerSelection == "rock" ) {
        console.log("You win! Paper beats Rock")

    } else if (playerSelection == "scissors" && computerSelection == "paper" ) {
        console.log("You win! Scissors beats Paper")

    } else if (playerSelection == "rock" && computerSelection == "paper" ) {
        console.log("You lose! Paper beats Rock")

    } else if (playerSelection == "scissors" && computerSelection == "rock" ) {
        console.log("You lose! Rock beats scissors")

    } else if (playerSelection == "paper" && computerSelection == "scissors" ) {
        console.log("You lose! Scissors beat paper")

    }else if (playerSelection == computerSelection) {
        console.log("Tie! You selected the same as the computer!")
    } else {
        console.log("Please recharge and input a valid option")
    }
}
rockPaperScissors()