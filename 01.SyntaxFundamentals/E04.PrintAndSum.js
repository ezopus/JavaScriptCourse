function printAndSum(start, end) {
  let sum = 0;
  let allNumbers = [];
  for (let index = start; index <= end; index++) {
    sum += index;
    allNumbers.push(index);
  }
  console.log(allNumbers.join(" "));
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
