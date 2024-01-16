function largestOfThree(numberOne, numberTwo, numberThree) {
  let largestNumber;
  if (numberOne > numberTwo) {
    if (numberOne > numberThree) {
      largestNumber = numberOne;
    } else {
      largestNumber = numberThree;
    }
  } else {
    if (numberTwo > numberThree) {
      largestNumber = numberTwo;
    } else {
      largestNumber = numberThree;
    }
  }
  console.log(`The largest number is ${largestNumber}.`);
}
