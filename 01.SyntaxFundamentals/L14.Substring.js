function subString(str, startIndex, count) {
  let substr = str.substring(startIndex, count + 1);
  console.log(substr);
}

subString("ASentence", 1, 8);
subString("SkipWord", 4, 7);
