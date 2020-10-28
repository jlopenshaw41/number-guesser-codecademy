let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => Math.floor(Math.random() * 10);

let compareGuesses = (userGuess, computerGuess, targetNum) => Math.abs(targetNum - userGuess) < Math.abs(targetNum - computerGuess);

let updateScore = (winner) => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    };
};

let advanceRound = () => currentRoundNumber++;
