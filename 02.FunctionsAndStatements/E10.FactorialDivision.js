function calcFactorial(number1, number2) {
  function calcNumber(number) {
    let result = 1;
    while (number > 1) {
      result *= number;
      number--;
    }
    return result;
  }

  console.log((calcNumber(number1) / calcNumber(number2)).toFixed(2));
}

calcFactorial(5, 2);
calcFactorial(6, 2);
