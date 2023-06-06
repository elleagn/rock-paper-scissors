function getComputerChoice () { // randomly returns "Rock", "Paper" or Scissors
    return randomElement(['Rock','Paper','Scissors'])
}

function randomElement (array) { // takes an array as an argument an returns a random element
    return array[randomInteger(array.length)]
}

function randomInteger (max) { // takes an integer max as an argument and returns a random integer between 0 and max-1
    return Math.floor(max*Math.random())

}

