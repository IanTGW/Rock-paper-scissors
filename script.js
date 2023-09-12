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

function hi(string){
    console.log(string)
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection()){
        return "You Tied!" ;
    } else if (playerSelection === 'Rock' && computerSelection() === 'Paper' || playerSelection === 'Paper' && computerSelection() === 'Scissors' || playerSelection === 'Scissors' && computerSelection() === 'Rock'){
        computerScore++;
        return "You Lose! " + computerSelection() + " beats " + playerSelection;
    } else {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection();
    }

}

let i = 0

function printResult(playerSelection, computerSelection){

    i++

    let outcome = playRound(playerSelection, computerSelection);
    
    if(i >= 5) {
    finalScore()
    } else {
    result.textContent = outcome;
    }

};

function finalScore(){

    if(playerScore === computerScore){
    result.textContent = "You Tied with the Computer";
    } else if (playerScore > computerScore){
    result.textContent = "You Beat the Computer!";
    } else {
    result.textContent = "You Lost to the Computer";
    };

};

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => printResult('Rock', getComputerChoice));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => printResult('Paper', getComputerChoice));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => printResult('Scissors', getComputerChoice));

const result = document.querySelector('.result');
