function solve(arr) {
  const garages = arr.reduce((acc, curr) => {
    let [garage, entry] = curr.split(" - ");
    garage = Number(garage);
    if (!acc[garage]) {
      acc[garage] = [];
    }
    while (entry.includes(":")) {
      entry = entry.replace(":", " -");
    }
    acc[garage].push(`--- ${entry}`);
    return acc;
  }, {});

  let number = "";
  Object.keys(garages).forEach((garage) => {
    if (garage !== number) number = garage;
    console.log(`Garage № ${number}`);
    garages[garage].forEach((entry) => {
      console.log(entry);
    });
  });
}

solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

solve([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
]);
