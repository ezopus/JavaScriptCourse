function cook(number, op1, op2, op3, op4, op5) {
  number = Number(number);
  let arr = [];
  arr.push(op1);
  arr.push(op2);
  arr.push(op3);
  arr.push(op4);
  arr.push(op5);

  arr.forEach((operation) => {
    switch (operation) {
      case "chop":
        number = number / 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number += 1;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number *= 0.8;
        break;
    }
    console.log(Number(number.toFixed(1)));
  });
}

cook("32", "chop", "chop", "chop", "chop", "chop");
cook("9", "dice", "spice", "chop", "bake", "fillet");
