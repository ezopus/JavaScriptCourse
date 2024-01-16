function revealWords(wordArr, textTemplate) {
  let words = wordArr.split(", ");
  let text = textTemplate.split(" ");

  words.forEach((element) => {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "*".repeat(text[i].length) && text[i].length === element.length) {
        text[i] = element;
      }
    }
  });

  console.log(text.join(" "));
}

revealWords("great, learning", "softuni is ***** place for ******** new programming languages");
