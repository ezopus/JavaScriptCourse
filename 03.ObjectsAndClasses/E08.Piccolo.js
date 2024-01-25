function checkParkingLot(arr) {
  const parking = new Set();
  arr.forEach((car) => {
    const [command, plate] = car.split(", ");
    if (command === "IN") {
      parking.add(plate);
    } else {
      parking.delete(plate);
    }
  });

  if (parking.size !== 0) {
    Array.from(parking)
      .sort((a, b) => a.localeCompare(b))
      .forEach((car) => {
        console.log(car);
      });
  } else {
    console.log("Parking Lot is Empty");
  }
}

checkParkingLot([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

checkParkingLot(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
