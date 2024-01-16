function subString(str, startIndex, count) {
  let substr = str.substring(startIndex, count + 1);
  console.log(substr.trim());
}

subString("ASentence", 1, 3);
subString("ASentence", 1, 12);
subString("SkipWord", 4, 7);
