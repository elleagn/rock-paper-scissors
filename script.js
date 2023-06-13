function getRandomInteger(max) {
  return Math.floor(max * Math.random());
}

function getRandomElement(array) {
  return array[getRandomInteger(array.length)];
}

function getComputerChoice() {
  return getRandomElement(["Rock", "Paper", "Scissors"]);
}

function modulo(integer, modulus) {
  const integerClass = ((integer % modulus) + modulus) % modulus;
  return integerClass;
}

function toNumber(selection) {
  let numberSelection;
  switch (selection) {
    case "Rock":
      numberSelection = 0;
      break;
    case "Paper":
      numberSelection = 1;
      break;
    case "Scissors":
      numberSelection = 2;
  }
  return numberSelection;
}

function calcGameResult(computerSelection, playerSelection) {
  /*the number indicates the relative position of computerSelection regarding playerSelection*/
  const playerNumber = toNumber(playerSelection);
  const computerNumber = toNumber(computerSelection);
  const gameResult = modulo(playerNumber - computerNumber, 3);
  return gameResult;
}

function convertTheId(id) {
  switch (id) {
    case "player-rock":
      return "Rock";
      break;
    case "player-paper":
      return "Paper";
      break;
    case "player-scissors":
      return "Scissors";
  }
}

function endTheGame() {
  const message = document.getElementById("text");
  const computerScore = Number(
    document.getElementById("computer-score").textContent
  );
  const board = document.querySelector(".board");
  board.removeChild(document.querySelector(".score"));
  if (computerScore === 5) {
    message.textContent = "Too bad ! You lost...";
  } else {
    message.textContent = "Congratulations ! You win !";
  }
}

function playRound(event) {
  /*The gameResult is calculated as a number to reduce the number of cases to 3 (vs 9) */
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });

  const computerSelection = getComputerChoice();
  const playerSelection = convertTheId(event.currentTarget.id);
  let gameResult = calcGameResult(computerSelection, playerSelection);

  const playerSpan = document.getElementById("player-score");
  let playerScore = Number(playerSpan.textContent);
  const computerSpan = document.getElementById("computer-score");
  let computerScore = Number(computerSpan.textContent);
  const roundSpan = document.getElementById("round-number");

  let message;
  switch (gameResult) {
    case 0:
      message = "Draw! No one wins...";
      break;
    case 1:
      message = `You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      playerSpan.textContent = `${playerScore}`;
      break;
    case 2:
      message = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
      computerSpan.textContent = `${computerScore}`;
  }

  const messageBox = document.getElementById("text");
  messageBox.textContent = message;

  if (computerScore < 5 && playerScore < 5) {
    setTimeout(() => {
      roundSpan.textContent = `${Number(roundSpan.textContent) + 1}`;
      messageBox.textContent = "Chose a option to play next round.";
      buttons.forEach((button) => {
        button.addEventListener("click", playRound);
      });
    }, 1000);
  } else {
    setTimeout(endTheGame, 1000);
  }
}

function makeButtonsClicky(buttons) {
  buttons.forEach(function (button) {
    button.addEventListener(
      "mouseover",
      () => (button.style.backgroundColor = "white")
    );
    button.addEventListener(
      "mouseout",
      () => (button.style.backgroundColor = "whitesmoke")
    );
  });
}

function initializeTheBoard() {
  const message = document.querySelector("#text");
  const buttons = document.querySelectorAll(".choicecontainer");
  message.textContent = "Chose an option to play.";
  makeButtonsClicky(buttons);
  const paragraphs = document.querySelectorAll(".hidden");
  paragraphs.forEach((paragraph) => {
    paragraph.classList.remove("hidden");
  });
  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  document.getElementById("round-number").textContent = "1";
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

function monitorPage() {
  const welcome = document.querySelector("#text");
  welcome.textContent = "Welcome to rock-paper-scissors !";
  welcome.style.fontFamily = "grutch";
  welcome.style.fontSize = "55px";
  welcome.style.color = "whitesmoke";
  const start = document.getElementById("start");
  start.addEventListener("mouseover", () => {
    start.style.backgroundColor = "limegreen";
  });
  start.addEventListener("mouseout", () => {
    start.style.backgroundColor = "lime";
  });
  start.addEventListener("click", initializeTheBoard, { once: true });
  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", playRound);
  });
}

monitorPage();
