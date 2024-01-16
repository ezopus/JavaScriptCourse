function sortedArr(arr) {
  let sorted = arr.sort().filter((w) => w.length > 0);
  if (sorted.length > 0) {
    for (let i = 0; i < sorted.length; i++) {
      console.log(`${i + 1}.${sorted[i]}`);
    }
  }
}

sortedArr(["John", "Bob", "Christina", "Ema"]);

sortedArr([""]);
