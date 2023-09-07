let playerScore = 0
let computerScore = 0

function getComputerChoice() {

    const randNum = Math.floor(Math.random()*3)+1;

    switch(randNum){
        case 1:
        return 'Rock';
        case 2:
        return 'Paper';
        case 3:
        return 'Scissors';
    };

}

function playRound(playerSelection, computerSelection){
   
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());

    if(playerSelection === computerSelection){
        return "You Tied!" ;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game(){

    for (let i = 1; i <= 5; i++){
        console.log(playRound(getPlayerChoice, getComputerChoice()))
    }

    let result = function(){
    if (playerScore === computerScore){
        return "You tied with the Computer. " + playerScore + " - " + computerScore;
    } else if (playerScore > computerScore){
        return "You beat the Computer! " + playerScore + " - " + computerScore;
    } else {
        return "You lost to the Computer. " + playerScore + " - " + computerScore;
    };
    }

    console.log(result())
};

let getPlayerChoice = prompt("Choose from rock paper scissors.")
getPlayerChoice = getPlayerChoice.toLowerCase()

if (getPlayerChoice === 'rock'|| getPlayerChoice === 'paper'|| getPlayerChoice === 'scissors'){
    game();
} else {
    console.log("Input Cancelled");
};
