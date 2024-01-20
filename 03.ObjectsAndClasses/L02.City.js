function printCityValues(city) {
  Object.entries(city).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

printCityValues({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
