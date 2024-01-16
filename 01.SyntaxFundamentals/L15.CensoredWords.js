function censoredWord(text, word) {
  let censoredText = text;
  while (censoredText.includes(word)) {
    censoredText = censoredText.replace(word, "*".repeat(word.length));
  }
  console.log(censoredText);
}

censoredWord("A small sentence with some small words", "small");
