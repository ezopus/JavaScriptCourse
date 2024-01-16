function vacation(group, type, day) {
  let sum = 0;
  if (type === "Students") {
    if (day === "Friday") sum = group * 8.45;
    if (day === "Saturday") sum = group * 9.8;
    if (day === "Sunday") sum = group * 10.46;
    if (group >= 30) sum *= 0.85;
  } else if (type === "Business") {
    let discount = 0;
    if (day === "Friday") {
      sum = group * 10.9;
      discount = 109;
    }
    if (day === "Saturday") {
      sum = group * 15.6;
      discout = 156;
    }
    if (day === "Sunday") {
      sum = group * 16;
      discount = 160;
    }
    if (group >= 100) sum -= discount;
  } else if (type === "Regular") {
    if (day === "Friday") sum = group * 15;
    if (day === "Saturday") sum = group * 20;
    if (day === "Sunday") sum = group * 22.5;
    if (group >= 10 && group <= 20) sum *= 0.95;
  }

  sum = console.log(`Total price: ${sum.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
