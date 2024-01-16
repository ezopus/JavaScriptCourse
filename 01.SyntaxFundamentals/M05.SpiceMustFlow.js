function calculateSpiceAmount(startingYield) {
  let daysOperated = 0;
  let totalAmount = 0;
  while (startingYield >= 100) {
    totalAmount += startingYield;
    startingYield -= 10;
    totalAmount -= 26;
    daysOperated++;
  }
  totalAmount -= 26;
  if (totalAmount < 0) totalAmount = 0;
  console.log(daysOperated);
  console.log(totalAmount);
}

calculateSpiceAmount(111);
calculateSpiceAmount(450);
