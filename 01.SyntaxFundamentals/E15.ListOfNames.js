function sortedArr(arr) {
  let sorted = arr.filter((w) => w.length > 0).sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sorted.length; i++) {
    console.log(`${i + 1}.${sorted[i]}`);
  }
}

// sortedArr(["John", "Bob", "Christina", "Ema"]);

// sortedArr(["Bob", "Bo", "bo"]);

// sortedArr(["a", "Aa", "b", "", "c"]);

// sortedArr(["абв", "вгб", "А", "Б", "ABC"]);

sortedArr(["AAB", "ABA", "aaa"]);
