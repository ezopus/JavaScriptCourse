function smallestOfThreeNumbers(...arr) {
  console.log(arr.reduce((acc, num) => (acc < num ? acc : num)));
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(-2, -5, 2);
