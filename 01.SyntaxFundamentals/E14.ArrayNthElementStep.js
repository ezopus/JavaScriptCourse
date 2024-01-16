function arrayNthStep(arr, step) {
  let steppedArr = [];
  for (let i = 0; i < arr.length; i += step) {
    steppedArr.push(arr[i]);
  }
  console.log(steppedArr);
}

arrayNthStep(["5", "20", "31", "4", "20"], 2);
arrayNthStep(["dsa", "asd", "test", "tset"], 2);
arrayNthStep([1, 2, 3, 4, 5], 6);
