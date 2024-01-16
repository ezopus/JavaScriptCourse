function loginChecker(username, ...rest) {
  const password = username.split("").reverse().join("");
  let wrongPasswordCounter = 0;
  for (let i = 0; i < rest.length; i++) {
    if (wrongPasswordCounter >= 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    if (rest[i] === password) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
      wrongPasswordCounter++;
    }
  }
}

loginChecker("Acer", "login", "go", "let me in", "recA");
loginChecker("sunny", "rainy", "cloudy", "sunny", "not sunny");
