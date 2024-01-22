function printMatrix(number) {
  for (let i = 0; i < number; i++) {
    let row = [];
    for (let j = 0; j < number; j++) {
      row.push(number);
    }
    console.log(row.join(" "));
  }
}

// printMatrix(3);
printMatrix(7);
