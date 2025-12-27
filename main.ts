/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-26
 * @fileoverview Error checking function for divide by zero.
 */

// function to check divide by zero
function divideByZero(dividend: number, divisor: number): boolean {
  if (divisor === 0) {
    return false;
  } else {
    return true;
  }
}

// constants and variables
const firstNumber: number = Number(prompt("Enter the first number:") || "0");
const secondNumber: number = Number(prompt("Enter the second number:") || "0");
let result: number;

// test the function
if (divideByZero(firstNumber, secondNumber)) {
  result = firstNumber / secondNumber;
  console.log(`${firstNumber} ÷ ${secondNumber} = ${result}`);
} else {
  console.log("Error: Division by zero is not allowed.");
}

console.log("\nDone.");
