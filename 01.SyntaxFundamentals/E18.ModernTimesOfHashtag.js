function specialWords(text) {
  let splitText = text.split(" ");
  let specialWordArr = splitText.filter(function (word) {
    return word.startsWith("#") && word.length > 1;
  });

  for (let w of specialWordArr.filter((word) => /^[a-zA-Z]+$/.test(word.slice(1)))) {
    console.log(w.slice(1));
  }
}

specialWords("Nowadays everyone uses # to tag a #special word in #socialMedia #Sp123 #media");
