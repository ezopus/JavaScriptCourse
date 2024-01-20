function createAddressBook(arr) {
  const result = arr.reduce((acc, curr) => {
    const [name, number] = curr.split(":");
    acc[name] = number;
    return acc;
  }, {});

  Object.keys(result)
    .sort((a, b) => a.localeCompare(b))
    .forEach((key) => {
      console.log(`${key} -> ${result[key]}`);
    });
}

createAddressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
