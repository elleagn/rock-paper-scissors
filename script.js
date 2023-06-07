function getRandomInteger  (max) { 
    return Math.floor(max*Math.random())

}

function getRandomElement (array) { 
    return array[getRandomInteger (array.length)]
}



function getComputerChoice () {
    return getRandomElement(['Rock','Paper','Scissors'])
}

function modulo (integer,modulus) {
    const integerClass= (integer%modulus+modulus)%modulus;
    return integerClass
}

function toNumber(selection) {
    let numberSelection;
    switch(selection) {
        case 'Rock':
            numberSelection=0;
            break;
        case 'Paper':
            numberSelection=1;
            break;
        case 'Scissors':
            numberSelection=2;
    }
    return numberSelection
}

function capitalize (string) {
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}


function calcGameResult (computerSelection,playerSelection) {
    /*the number indicates the relative position of computerSelection regarding playerSelection*/
    const playerNumber = toNumber(playerSelection);
    const computerNumber=toNumber(computerSelection);
    const gameResult = modulo(playerNumber-computerNumber,3);
    return gameResult;
}


function playRound (computerSelection, playerSelection) {
    /*The gameResult is calculated as a number to reduce the number of cases to 3 (vs 9) */
    let gameResult = calcGameResult(computerSelection,playerSelection);
    let message;
    switch(gameResult) {
        case 0 :
            message = 'Draw! No one wins...';
            break;
        case 1 :
            message = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case 2 :
            message = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    console.log(message);
    return gameResult

}

function isValid (playerSelection) {
    selectionValid=['Rock','Paper','Scissors'].includes(playerSelection);
    return selectionValid
}

function getPlayerChoice() {
        let playerSelection=capitalize(prompt('Rock, Paper or Scissors ?'));
        let selectionValid=isValid(playerSelection);
    while (!selectionValid) {
        console.log('Something\'s wrong with your choice. Try again.');
        playerSelection=capitalize(window.prompt('Rock, Paper or Scissors ?'));
        selectionValid=isValid(playerSelection);
    }
    return playerSelection
}

function game () {
    console.log('Welcome to rock-paper-scissors!');
    const player = window.prompt('Please enter a username.','player');
    let playerScore=0;
    let computerScore=0;
    
    for (let roundNumber = 0;roundNumber<5;) {
        roundNumber ++;
        console.log(`Round ${roundNumber} : ${player} ${playerScore} - Computer ${computerScore}`);
        let playerSelection=getPlayerChoice();
        let computerSelection=getComputerChoice();
        let roundResult=playRound(computerSelection,playerSelection);
        if (roundResult==2) {
            computerScore++;
        } else if (roundResult==1) {
            playerScore++;
        }
    }

    console.log(`Final score : ${player} ${playerScore} - Computer ${computerScore}`)
    if (playerScore>computerScore) {
        console.log(`Congratulations ${player}, you won!`);
    } else if (playerScore==computerScore) {
        console.log(`Draw! No one wins...`);
    } else {
        console.log(`Too bad ${player} : you lose!`);
    }
}

