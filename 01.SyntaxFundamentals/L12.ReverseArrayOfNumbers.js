function ReversePrintArray(number, arr) {
  let output = [];
  for (let i = 0; i < number; i++) {
    output.push(arr[i]);
  }
  console.log(output.reverse().join(" "));
}

ReversePrintArray(3, [1, 2, 3, 4, 5]);
