function loginChecker(tokens) {
  const username = tokens[0];
  const password = username.toString().split("").reverse().join("");
  let wrongPasswordCounter = 0;
  for (let i = 1; i < tokens.length; i++) {
    if (tokens[i] === password) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      wrongPasswordCounter++;
    }
    if (wrongPasswordCounter > 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    console.log("Incorrect password. Try again.");
  }
}

loginChecker(["Acer", "login", "go", "let me in", "recA"]);
loginChecker(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
