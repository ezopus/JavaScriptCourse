function printLoadingBar(percentage) {
  const result = "%".repeat(percentage / 10) + ".".repeat(10 - percentage / 10);
  if (percentage === 100) {
    console.log("100% Complete!");
  } else {
    console.log(`${percentage}% [${result}]`);
    console.log("Still loading...");
  }
}

printLoadingBar(30);
printLoadingBar(70);
printLoadingBar(100);
