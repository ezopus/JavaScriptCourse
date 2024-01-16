function reversedChars(first, second, third) {
  let string = [];
  string.push(first);
  string.push(second);
  string.push(third);
  console.log(string.reverse().join(" "));
}

reversedChars("a", "b", "c");
reversedChars("%", "2", "o");
reversedChars("1", "5", "p");
