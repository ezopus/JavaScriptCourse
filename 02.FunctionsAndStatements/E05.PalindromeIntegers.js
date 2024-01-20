function palindromeChecker(arr) {
  const output = [];
  for (n of arr) {
    let reversed = n.toString().split("").reverse().join("");
    output.push(n === Number(reversed));
  }

  console.log(output.join("\n"));
}

palindromeChecker([123, 323, 421, 121]);

palindromeChecker([32, 2, 232, 1010]);
