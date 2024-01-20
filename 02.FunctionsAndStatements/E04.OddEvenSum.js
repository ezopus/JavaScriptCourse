function sumOddEvenDigits(number) {
  const even = [];
  const odd = [];
  for (n of number.toString()) {
    if (n % 2 === 0) even.push(Number(n));
    else odd.push(Number(n));
  }

  let evenSum = even.reduce((arr, n) => (arr += n), 0);
  let oddSum = odd.reduce((arr, n) => (arr += n), 0);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumOddEvenDigits(1000435);

sumOddEvenDigits(3495892137259234);

sumOddEvenDigits(0);
