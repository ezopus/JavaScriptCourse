function vacation(group, type, day) {
  let sum = 0;
  if (type === "Students") {
    if (day === "Friday") sum = group * 8.45;
    if (day === "Saturday") sum = group * 9.8;
    if (day === "Sunday") sum = group * 10.46;
    if (group >= 30) sum *= 0.85;
  }

  if (type === "Business") {
    if (group >= 100) group -= 10;
    if (day === "Friday") sum = group * 10.9;
    if (day === "Saturday") sum = group * 15.6;
    if (day === "Sunday") sum = group * 16;
  }

  if (type === "Regular") {
    if (day === "Friday") sum = group * 15;
    if (day === "Saturday") sum = group * 20;
    if (day === "Sunday") sum = group * 22.5;
    if (group >= 10 && group <= 20) sum *= 0.95;
  }

  sum = console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
