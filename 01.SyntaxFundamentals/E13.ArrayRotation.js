function arrayRotate(arr, count) {
  while (count > 0) {
    let shifted = arr.shift();
    arr.push(shifted);
    count--;
  }
  console.log(arr.join(" "));
}

arrayRotate([51, 47, 32, 61, 21], 2);
arrayRotate([32, 21, 61, 1], 4);
arrayRotate([2, 4, 15, 31], 5);
