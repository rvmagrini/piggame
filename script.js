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

let currentScore, scores, activePlayer;

const initial = () => {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = Math.floor(Math.random() * 2);
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
};
initial();

// New Game
newgame.addEventListener("click", initial);

roll.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 6 + 1);
  dice.src = `img/dice${random}.png`;
  if (random === 1) {
    // SWITCH
    console.log("Switched");
  } else {
    currentScore += random;
    current0.textContent = currentScore;
  }
});

hold.addEventListener("click", function () {
  scores[0] = currentScore;
  score0.textContent = scores[0];
  console.log(scores);
});
