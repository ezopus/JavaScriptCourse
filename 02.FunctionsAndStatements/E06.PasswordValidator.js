function checkPassword(password) {
  const output = [];

  function digitsCount(password) {
    const d = password.match(/\d/g);
    return d.length;
  }

  if (password.length < 6 || password.length > 10) {
    output.push("Password must be between 6 and 10 characters");
  }

  if (password.match(/\W/g)) {
    output.push("Password must consist only of letters and digits");
  }

  if (digitsCount(password) < 2) {
    output.push("Password must have at least 2 digits");
  }
  if (output.length > 0) {
    console.log(output.join("\n"));
  } else {
    console.log("Password is valid");
  }
}

checkPassword("logIn21");

// checkPassword("MyPass123");
