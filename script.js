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

let currentScore, scores, activePlayer;

const initial = () => {
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

// New Game
newgame.addEventListener("click", initial);

// Switch Player
const switchPlayer = () => {
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// ROLL DICE
roll.addEventListener("click", function () {
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
});

// HOLD
hold.addEventListener("click", function () {
  if (currentScore !== 0) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.score${activePlayer}`).textContent =
      scores[activePlayer];
    document.querySelector(`.current${activePlayer}`).textContent = 0;

    // FINISH GAME
    if (scores[activePlayer] >= 10) {
      document.querySelector(`.player${activePlayer}`).classList.add("winner");
      player0.classList.remove("active");
      player1.classList.remove("active");
      dice.classList.add("hidden");
      roll.classList.add("hidden");
      hold.classList.add("hidden");
      alert.textContent = "RESET THE GAME";
    }
  } else if (currentScore === 0) {
    alert.textContent = "ROLL THE DICE";
  } else {
    currentScore = 0;
    dice.classList.add("hidden");
    switchPlayer();
  }
});
