function calcStoreProvisions(stock, delivery) {
  const all = [...stock, ...delivery];
  const products = all.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      if (acc[curr]) {
        acc[curr] += Number(all[index + 1]);
      } else {
        acc[curr] = Number(all[index + 1]);
      }
    }
    return acc;
  }, {});

  Object.entries(products).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

calcStoreProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
