function validityChecker(arr) {
  const x1 = arr[0];
  const y1 = arr[1];
  const x2 = arr[2];
  const y2 = arr[3];
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
