"use strict";

// Tagging elements
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");
const current0 = document.querySelector(".current0");
const current1 = document.querySelector(".current1");
const newgame = document.querySelector("newgame");
const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

const initial = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
};
