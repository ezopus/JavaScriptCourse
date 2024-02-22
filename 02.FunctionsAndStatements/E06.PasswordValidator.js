function checkPassword(password) {
  const output = [];

  function digitsCount(password) {
    const d = password.match(/\d/g);
    return d !== null ? d.length : 0;
  }

  function specialCharsCount(password) {
    const d = password.match(/\W/g);
    return d !== null ? d.length : 0;
  }

  if (password.length < 6 || password.length > 10) {
    output.push("Password must be between 6 and 10 characters");
  }

  if (specialCharsCount(password)> 0) {
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

checkPassword("Pa$s$s");

// checkPassword("MyPass123");
