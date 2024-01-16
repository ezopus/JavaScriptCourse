function findSubstring(word, text) {
  word = word.toLowerCase();
  text = text.toLowerCase();
  if (text.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

findSubstring("javascript", "JavaScript is the best programming language");
