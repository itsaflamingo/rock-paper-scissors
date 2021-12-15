function computerPlay() { //works! 
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

function game ()  {
    for (counter=1; counter<=5; counter++) { //counter starts at one, as long as it is less than or equal to 5, it will run. 
        
        playerSelection = (window.prompt("Choose between: rock, paper, scissors: ").toLowerCase());; //prompts user. If input is upper-case, it switches to lower-case. 
        computerSelection=computerPlay(); //calls on computerPlay function, stores in variable computerSelection. 

        function playRound(computerSelection, playerSelection) { //plays one round 
                if (computerSelection === playerSelection) {
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
                let score = () => { //returns array storing computerScore, playerScore. Array is the only way to return multiple values. 

                    if (playRound(computerSelection, playerSelection) == "Tie, please try again.") {
                        return [computerScore, playerScore];
                    }
                    else if (playRound(computerSelection, playerSelection) == "You win!") {
                        ++playerScore;//++playerScore returns var after increment, playerScore++ returns var before increment. 
                        return [computerScore, playerScore]; //returns array with both values. 
                    }
                    else if (playRound(computerSelection, playerSelection) == "Computer wins!") {
                        ++computerScore;
                        return [computerScore, playerScore];
                    }   
                            
                }

        console.log(`${playerSelection}, ${computerSelection}`);
        console.log(score(playerScore, computerScore));
        console.log(playRound(computerSelection, playerSelection));
        console.log(counter);
    }

    if (playerScore > computerScore) {
        return "You win!";
    }
    else if (computerScore > playerScore) {
        return "You lose:(";
    }
    else if (computerScore == playerScore) {
        return "Tie, play again.";
    }
    
}
console.log(game());

