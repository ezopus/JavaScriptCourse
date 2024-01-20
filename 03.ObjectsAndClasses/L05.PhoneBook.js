function createPhoneBook(arr) {
  const result = arr.reduce((acc, curr) => {
    const [name, number] = curr.split(" ");
    acc[name] = number;
    return acc;
  }, {});

  Object.keys(result).forEach((key) => {
    console.log(`${key} -> ${result[key]}`);
  });
}

createPhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

createPhoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
