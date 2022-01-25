//container holds all content inside
const container = document.querySelector('#container');
const rpsButtons = document.querySelector('.buttons');

//div containing computer buttons
const compButtonDiv = document.createElement('div');
compButtonDiv.classList.add('compButtonDiv');

//computer buttons (player buttons are in HTML)
const compRock = document.createElement('button');
compRock.classList.add('compRock');
compRock.setAttribute('disabled', 'disabled'); //disable computer buttons using 'disable' attribute

const compPaper = document.createElement('button');
compPaper.classList.add('compPaper');
compPaper.setAttribute('disabled', 'disabled'); //disable 

const compScissors = document.createElement('button');
compScissors.classList.add('compScissors');
compScissors.setAttribute('disabled', 'disabled'); //disable 

//computer choice display in text
const choiceDiv = document.createElement('div');
choiceDiv.classList.add('choiceDiv');

//player div
const playerDiv = document.createElement('div');
playerDiv.classList.add('playerDiv');

//player choice display in text
    const playerChoiceDiv = document.createElement('div');
    playerChoiceDiv.classList.add('playerChoiceDiv');

const computerDiv = document.createElement('div');
computerDiv.classList.add('computerDiv');

const scoreDiv = document.createElement('div');
scoreDiv.classList.add('scoreDiv');

//displays running score
const scoreDisplay = document.createElement('h2');
scoreDisplay.classList.add('displayScore');

//displays player choice
const playerChoiceDisplay = document.createElement('h2');
playerChoiceDisplay.classList.add('playerChoice');

//displays computer choice
const compChoiceDisplay = document.createElement('h2');
compChoiceDisplay.classList.add('compChoice');

//round message
const roundDisplay = document.createElement('h2');
roundDisplay.classList.add('roundDisplay');

//displays final score
const outcomeDisplay = document.createElement('h2');
outcomeDisplay.classList.add('displayOutcome');

scoreDiv.appendChild(scoreDisplay);
scoreDiv.appendChild(roundDisplay);
scoreDiv.appendChild(outcomeDisplay);

playerDiv.appendChild(playerChoiceDiv);
    playerChoiceDiv.appendChild(playerChoiceDisplay);
playerDiv.appendChild(rpsButtons);

//Final div
const finalPage = document.createElement('div');
finalPage.classList.add('finalPage');

//play again button
const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('playAgainBtn');

//computer
computerDiv.appendChild(compChoiceDisplay);
computerDiv.appendChild(compButtonDiv);
compButtonDiv.appendChild(compRock);
compButtonDiv.appendChild(compPaper);
compButtonDiv.appendChild(compScissors);

//player
choiceDiv.appendChild(playerDiv);
choiceDiv.appendChild(computerDiv);

//score/choice
container.appendChild(scoreDiv);
container.appendChild(choiceDiv);

//final page
container.appendChild(playAgainBtn);

function computerPlay() { //computer choice 
    let num = (Math.floor((Math.random() * 3) + 1)); //math.random - chooses int between 0 and 1. * 3 to get max int, + 1 to get it between 1-3, math.floor rounds it.

    switch (num) {
        case 1: 
        return "rock";
        case 2: 
        return "paper";
        case 3: 
        return "scissors";
    }


}


let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;
let counter = 0;

let playerChoice = document.querySelector('.playerChoice');
let compChoice = document.querySelector('.compChoice');
let displayScore = document.querySelector('.displayScore');
let displayOutcome = document.querySelector('.displayOutcome');
let displayRound = document.querySelector('.roundDisplay');

//play again button text
document.querySelector('.playAgainBtn').textContent = 'Play Again';

//play again button refresh
playAgainBtn.addEventListener('click', e => {
    window.location.reload("Refresh");
});

//stores all instances of 'button' in variable buttons
const buttons = document.querySelectorAll('button');  

buttons.forEach((button) => {
   button.addEventListener('click', e => {
    
    let elems=document.getElementsByClassName("button");
    //getElementsByClassName returns all elements with class name "button", which is iterated over by playerPlay().
    button.classList.add('clicked'); 


function game()  {
    
    function playerPlay() { //finds out which button user clicked. 
        if (e.target.id == 'R') {  //first item returned by elems, selected by elems[0], returning its value which is 'rock'. Repeated for paper & scissors.
            playerSelection = elems[0].value;
            return playerSelection;
        }
        else if (e.target.id == 'P') {
            playerSelection = elems[1].value;
            return playerSelection;
        }
        else if (e.target.id == 'S') {
            playerSelection=elems[2].value;
            return playerSelection;
        }
    }


if (counter<=4) { //counts down 5 games
  playerSelection=playerPlay(); //calls on playerPlay function, stores result in variable playerSelection
  computerSelection=computerPlay(); //calls on computerPlay function, stores result in variable computerSelection. 

        function playRound(computerSelection, playerSelection) { //selects round winner by comparing computer & player selection
                if (computerSelection == playerSelection) {
                    return "Tie, please try again.";
                }
                else if (computerSelection == 'rock' && playerSelection == 'scissors') {
                    return "Computer wins!";
                }
                else if (computerSelection == 'scissors' && playerSelection == 'rock') {
                    return "You win!";
                }
                else if (computerSelection == 'paper' && playerSelection == 'rock') {
                    return "Computer wins!";
                }
                else if (computerSelection == 'rock' && playerSelection == 'paper') {
                    return "You win!";
                }
                else if (computerSelection == 'scissors' && playerSelection == 'paper') {
                    return "Computer wins!";
                }
                else if (computerSelection == 'paper' && playerSelection == 'scissors') {
                    return "You win!";
                }
        }
                let score = () => { //calls playRound to check round winner, returns array storing computerScore, playerScore.

                    if (playRound(computerSelection, playerSelection) == "Tie, please try again.") {
                        counter--; //reduces counter by one so that ties don't count as a game. It's first to 5.
                        (displayRound.textContent = ("Tie, please try again"));
                        return [playerScore, computerScore];
                    }
                    else if (playRound(computerSelection, playerSelection) == "You win!") {
                        ++playerScore;//++playerScore returns var after increment, playerScore++ returns var before increment. 
                        (displayRound.textContent = ("You win!"));
                        return [playerScore, computerScore]; //returns array with both values. 
                    }
                    else if (playRound(computerSelection, playerSelection) == "Computer wins!") {
                        ++computerScore;
                        (displayRound.textContent = ("You lose:("));
                        return [playerScore, computerScore];
                    }   
                            
                }

        counter++ //increases counter by 1 each time round is played. 
        playerChoice.textContent = (`You chose ${playerSelection}!`);
        compChoice.textContent =( `The computer chose ${computerSelection}!`);
        displayScore.textContent =(score([playerScore , computerScore]));
        //console.log(score([playerScore, computerScore]));
}
else {//once number of games (counter) reaches 5, winner is declared. 

    if (playerScore > computerScore) {
        scoreDiv.replaceChild(displayOutcome, roundDisplay);
        return (displayOutcome.textContent = ("You win the game!"));
    }
    else if (computerScore > playerScore) {
        scoreDiv.replaceChild(displayOutcome, roundDisplay);
        return (displayOutcome.textContent = ("You lost the game, better luck next time."));
    }
    else if (computerScore == playerScore) {
        scoreDiv.replaceChild(displayOutcome, roundDisplay);
        return (displayOutcome.textContent = ("It's a draw:("));
    }
 
}
}
game(); //calls game() function. 

});
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not a transform
    this.classList.remove('clicked');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));





