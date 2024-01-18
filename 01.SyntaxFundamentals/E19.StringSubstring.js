function findSubstring(word, text) {
  let textArr = text.toLowerCase().split(" ");
  let result = `${word} not found!`;

  for (w of textArr) {
    if (w === word) {
      result = word;
    }
  }

  console.log(result);
}

findSubstring("javascript", "JavaScript is the best programming language");

// findSubstring(" ", " ");
