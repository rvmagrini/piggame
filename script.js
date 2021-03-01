"use strict";

// Tagging elements
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");
const current0 = document.querySelector(".current0");
const current1 = document.querySelector(".current1");
const newgame = document.querySelector(".newgame");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const alert = document.querySelector(".alert");

let currentScore, scores, activePlayer, playing;

const initial = () => {
  playing = true;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = Math.floor(Math.random() * 2);
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add("hidden");
  roll.classList.remove("hidden");
  hold.classList.remove("hidden");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.remove("active");
  player1.classList.remove("active");
  alert.textContent = "";

  activePlayer === 0
    ? player0.classList.add("active")
    : player1.classList.add("active");
};
initial();

// NEW GAME BUTTON
newgame.addEventListener("click", initial);

// SWITCH PLAYER
const switchPlayer = () => {
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// ROLL DICE
const rolldice = () => {
  if (playing) {
    const random = Math.floor(Math.random() * 6 + 1);
    dice.src = `img/dice${random}.png`;
    dice.classList.remove("hidden");
    alert.textContent = "";
    if (random === 1) {
      currentScore = 0;
      document.querySelector(
        `.current${activePlayer}`
      ).textContent = currentScore;
      switchPlayer();
    } else {
      currentScore += random;
      document.querySelector(
        `.current${activePlayer}`
      ).textContent = currentScore;
    }
  }
};
roll.addEventListener("click", rolldice);

// HOLD
const holdCurrent = () => {
  if (playing) {
    if (currentScore !== 0) {
      scores[activePlayer] += currentScore;
      document.querySelector(`.score${activePlayer}`).textContent =
        scores[activePlayer];
      document.querySelector(`.current${activePlayer}`).textContent = 0;
    } else {
      alert.textContent = "ROLL THE DICE";
      return;
    }

    // FINISH GAME
    if (scores[activePlayer] >= 100) {
      document.querySelector(`.player${activePlayer}`).classList.add("winner");
      player0.classList.remove("active");
      player1.classList.remove("active");
      dice.classList.add("hidden");
      roll.classList.add("hidden");
      hold.classList.add("hidden");
      alert.textContent = "'N' RESET THE GAME";
      playing = false;
    } else {
      currentScore = 0;
      dice.classList.add("hidden");
      switchPlayer();
    }
  }
};
hold.addEventListener("click", holdCurrent);

// KEYBOARD SHORTCUTS

const type = (key) => {
  switch (key) {
    case "q":
    case "p":
      rolldice();
      break;

    case "w":
    case "o":
      holdCurrent();
      break;

    case "n":
      initial();
      break;
  }
};

document.addEventListener("keydown", function (event) {
  type(event.key);
});
