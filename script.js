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
  alert.textContent = "";
  document.getElementById(`h2player${activePlayer}`).classList.add("active");
};
initial();

// New Game
newgame.addEventListener("click", initial);

// Switch Player
const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// Roll dice
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

hold.addEventListener("click", function () {
  if (currentScore !== 0) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.score${activePlayer}`).textContent =
      scores[activePlayer];
    document.querySelector(`.current${activePlayer}`).textContent = 0;

    // Finish game
    if (scores[activePlayer] >= 100) {
      console.log("you won");
      dice.classList.add("hidden");
      roll.classList.add("hidden");
      hold.classList.add("hidden");
      alert.textContent = "RESET THE GAME";
    }
    currentScore = 0;
    dice.classList.add("hidden");
    switchPlayer();
  } else {
    alert.textContent = "ROLL THE DICE";
  }
});
