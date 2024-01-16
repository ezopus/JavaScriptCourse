function circleArea(radius) {
  let type = typeof radius;
  let result;
  if (typeof radius === "number") {
    result = Math.PI * radius * radius;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
