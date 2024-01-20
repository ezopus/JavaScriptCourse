function checkPassword(password) {
  const output = [];

  function digitsCount(password) {
    let d = password.matchAll(/\d/g);
    return d.length;
  }

  let d = digitsCount(password);

  if (password.length < 6 && password.length > 10) {
    output.push("Password must be between 6 and 10 characters");
  }

  if (password.match(/\W/g)) {
    output.push("Password must consist only of letters and digits");
  }

  if (password.matchAll(/\d/g).length < 2) {
    output.push("Password must have at least 2 digits");
  }
  console.log(output.join("\n"));
}

checkPassword("logIn123");
