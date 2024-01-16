function sameNumbers(number) {
  let isSame = true;
  let digits = [];
  let sum = 0;
  while (number !== 0) {
    sum += number % 10;
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] !== digits[i + 1]) {
      isSame = false;
      break;
    }
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
