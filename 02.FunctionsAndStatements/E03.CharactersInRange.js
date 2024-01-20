function printCharsInRange(start, end) {
  const startIndex = Math.min(start.charCodeAt(0), end.charCodeAt(0));
  const endIndex = Math.max(start.charCodeAt(0), end.charCodeAt(0));
  let result = [];
  for (let i = startIndex + 1; i < endIndex; i++) {
    result.push(String.fromCharCode(i));
  }
  console.log(result.join(" "));
}
printCharsInRange("a", "d");
printCharsInRange("#", ":");
