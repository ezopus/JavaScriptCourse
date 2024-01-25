function printEmployees(arr) {
  const employees = arr.reduce((acc, curr) => {
    const id = curr.length;
    acc[curr] = id;
    return acc;
  }, {});

  Object.entries(employees).forEach(([key, value]) => {
    console.log(`Name: ${key} -- Personal Number: ${value}`);
  });
}

printEmployees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
