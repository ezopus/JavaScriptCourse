function signCheck(...arr) {
  let isPositive = true;
  for (number of arr) {
    if (number < 0 && isPositive) isPositive = false;
    else if (number < 0 && !isPositive) isPositive = true;
    else continue;
  }
  const result = isPositive ? "Positive" : "Negative";
  console.log(result);
}

signCheck(5, 12, -15);
signCheck(5, -12, -15);
signCheck(-5, -12, -15);
