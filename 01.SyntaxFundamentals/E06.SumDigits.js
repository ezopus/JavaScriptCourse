function sumOfDigits(number) {
  let sum = 0;
  number = Number(number);
  while (number !== 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  console.log(sum);
}

sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);
