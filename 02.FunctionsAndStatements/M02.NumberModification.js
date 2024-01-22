function modifyNumber(number) {
  function calculateAverage(number) {
    const count = number.toString().length;
    const result = number
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, curr) => (acc += curr), 0);
    return result / count;
  }

  while (calculateAverage(number) < 5) {
    number += "9";
  }

  console.log(number);
}

modifyNumber(101);
modifyNumber(5835);
