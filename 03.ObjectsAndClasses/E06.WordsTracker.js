function findOccurences(arr) {
  const words = arr[0].split(" ");
  const result = {};
  words.forEach((w) => {
    result[w] = 0;
  });

  arr.splice(0, 1);
  arr.reduce((acc, curr) => {
    const word = words.find((w) => w === curr);
    if (word) {
      result[word]++;
    }
    return acc;
  }, {});

  Object.keys(result)
    .sort((a, b) => result[b] - result[a])
    .forEach((key) => {
      console.log(`${key} - ${result[key]}`);
    });
}

findOccurences([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

findOccurences([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
