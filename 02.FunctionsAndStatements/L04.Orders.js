function orders(item, count) {
  const product = {
    water: 1,
    coke: 1.4,
    coffee: 1.5,
    snacks: 2,
  };
  console.log((product[item] * count).toFixed(2));
}

orders("water", 5);
