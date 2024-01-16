function validityChecker(x1, y1, x2, y2) {
  function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  function checkDistance(x1, y1, x2, y2) {
    const distance = calculateDistance(x1, y1, x2, y2);
    const isInteger = Number.isInteger(distance);
    const status = isInteger ? "valid" : "invalid";

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`);
  }

  checkDistance(x1, y1, 0, 0);
  checkDistance(x2, y2, 0, 0);
  checkDistance(x1, y1, x2, y2);
}

//validityChecker(3, 0, 0, 4);
//validityChecker(2, 1, 1, 1);
