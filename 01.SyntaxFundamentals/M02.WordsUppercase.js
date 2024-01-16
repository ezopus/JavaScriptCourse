function wordsToUppercase(text) {
  const uppercaseWords = text
    .toUpperCase()
    .split(/\W+/)
    .filter((w) => w.length >= 1);
  //   uppercaseWords.forEach((el) => (el = el.match(/[A-Za-z]+/).toUpperCase()));
  console.log(uppercaseWords.join(", "));
}

wordsToUppercase("Hi, how are you?");
