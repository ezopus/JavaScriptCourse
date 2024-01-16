"use strict";

function calculate(number1, operator, number2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      break;
  }
  console.log(`${result.toFixed(2)}`);
}

calculate(5, "+", 10);
calculate(25.5, "-", 3);
