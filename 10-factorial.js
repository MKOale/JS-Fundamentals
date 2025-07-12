#!/usr/bin/node

const num = parseInt(process.argv[2]);

function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
// This code defines a recursive function `factorial` that calculates the factorial of a given number.
// It checks if the input is a number and handles the base case for 0.