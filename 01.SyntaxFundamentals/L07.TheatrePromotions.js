function ticketCost(day, age) {
  let cost;
  if (age >= 0 && age <= 18) {
    if (day === "Weekday") {
      cost = "12$";
    } else if (day === "Weekend") {
      cost = "15$";
    } else {
      cost = "5$";
    }
  } else if (age > 18 && age <= 64) {
    if (day === "Weekday") {
      cost = "18$";
    } else if (day === "Weekend") {
      cost = "20$";
    } else {
      cost = "12$";
    }
  } else if (age > 64 && age <= 122) {
    if (day === "Weekday") {
      cost = "12$";
    } else if (day === "Weekend") {
      cost = "15$";
    } else {
      cost = "10$";
    }
  } else {
    cost = "Error!";
  }
  console.log(cost);
}
