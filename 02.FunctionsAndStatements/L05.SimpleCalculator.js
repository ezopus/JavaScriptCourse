function calculate(num1, num2, operator) {
  const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
  };

  console.log(calculator[operator](num1, num2));
}

calculate(5, 5, "multiply");
