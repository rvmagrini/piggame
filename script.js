"use strict";

// Check Prime
const isPrime = (number) => {
  if (number === 1 || number === 0) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Handle Check Click
document.querySelector("#checkbtn").addEventListener("click", function () {
  let txtNum = document.querySelector("#txtnum").value;
  let outcomeCheck = document.querySelector("#outcomecheck");
  let num = Number(txtNum);

  if (num > 0) {
    isPrime(num)
      ? (outcomeCheck.innerHTML = `Yes, ${num} is a prime number.`)
      : (outcomeCheck.innerHTML = `No, ${num} is not a prime number.`);
  }
});

// Find Out all prime numbers between the set numbers

document.querySelector("#findbtn").addEventListener("click", function () {
  let txtFirstNum = document.querySelector("#txtfirstnum").value;
  let txtLastNum = document.querySelector("#txtlastnum").value;
  let outcomeFind = document.querySelector("#outcomefind");
  let firstNum = Number(txtFirstNum);
  let lastNum = Number(txtLastNum);

  outcomeFind.innerHTML = ``;

  if (firstNum >= lastNum) {
    outcomeFind.innerHTML = `The first typed number has to be lower than the second.`;
  } else {
    let primeArr = [];

    for (let i = firstNum; i <= lastNum; i++) {
      isPrime(i) && primeArr.push(i);
    }

    const primeStr = primeArr.join(", ");
    console.log(primeStr);

    outcomeFind.innerHTML += `${primeStr}`;
  }
});

// for (let i = 0; i <= 100; i++) {
//   isPrime(i) && primeArr.push(i);
// }

// console.log(primeArr);
