function getRandomInteger  (max) { // takes an integer max as an argument and returns a random integer between 0 and max-1
    return Math.floor(max*Math.random())

}

function getRandomElement (array) { // takes an array as an argument an returns a random element
    return array[getRandomInteger (array.length)]
}



function getComputerChoice () { // randomly returns "Rock", "Paper" or Scissors
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
    /*calculates the game result as a number considering 0=Rock,1=Paper and 2=Scissors. Playing a round is equivalent to divide te difference by 3*/
    const playerNumber = toNumber(playerSelection);
    const computerNumber=toNumber(computerSelection);
    const gameResult = modulo(playerNumber-computerNumber,3);
    return gameResult;
}


function playRound (computerSelection, playerSelection) {
    const capitalePlayerSelection=capitalize(playerSelection);
    const gameResult = calcGameResult(computerSelection,capitalePlayerSelection);
    let message;
    switch(gameResult) {
        case 0 :
            message = 'Draw! No one wins...';
            break;
        case 1 :
            message = `You Win! ${capitalePlayerSelection} beats ${computerSelection}`;
            break;
        case 2 :
            message = `You Lose! ${computerSelection} beats ${capitalePlayerSelection}`;
    }
    return message

}

