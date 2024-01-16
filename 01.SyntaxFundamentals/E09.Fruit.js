function fruitCalc(type, weight, price) {
  let sum = (weight / 1000) * price;
  console.log(
    `I need $${sum.toFixed(2)} to buy ${(weight / 1000).toFixed(
      2
    )} kilograms ${type}.`
  );
}

fruitCalc("orange", 2500, 1.8);
fruitCalc("apple", 1563, 2.35);
