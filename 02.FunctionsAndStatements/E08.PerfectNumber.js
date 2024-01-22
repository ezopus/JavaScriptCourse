function checkForPerfectNumber(number) {
  const divisors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  const sum = divisors.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  if (sum === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

checkForPerfectNumber(6);
checkForPerfectNumber(28);
checkForPerfectNumber(1236498);
