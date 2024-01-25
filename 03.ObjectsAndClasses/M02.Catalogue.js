function getCatalogue(arr) {
  const catalogue = arr.reduce((acc, curr) => {
    const [item, price] = curr.split(" : ");
    acc[item] = Number(price);
    return acc;
  }, {});

  let letter = "";
  Object.keys(catalogue)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      if (key[0] !== letter) {
        console.log(key[0].toUpperCase());
        letter = key[0];
      }
      console.log(`  ${key}: ${catalogue[key]}`);
    });
}

getCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

getCatalogue(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
