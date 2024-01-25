function flightSchedule(arr) {
  const [flightsArray, changes, status] = arr;
  const flights = flightsArray.reduce((acc, curr) => {
    let [number, ...destination] = curr.split(" ");
    destination = destination.join(" ");
    const status = null;
    acc[number] = { number, destination, status };
    return acc;
  }, {});

  //   console.log(flights);

  changes.forEach((flight) => {
    const [number, statusChange] = flight.split(" ");
    if (flights[number]) {
      flights[number].status = statusChange;
    }
  });

  if (status.toString() !== "Ready to fly") {
    Object.keys(flights).forEach((flightNumber) => {
      if (flights[flightNumber].status === status.toString()) {
        console.log(
          `{ Destination: '${flights[flightNumber].destination}', Status: '${flights[flightNumber].status}' }`
        );
      }
    });
  } else {
    Object.keys(flights).forEach((flightNumber) => {
      if (flights[flightNumber].status === null) {
        flights[flightNumber].status = "Ready to fly";
        console.log(
          `{ Destination: '${flights[flightNumber].destination}', Status: '${flights[flightNumber].status}' }`
        );
      }
    });
  }
}

// flightSchedule([
//   [
//     "WN269 Delaware",
//     "FL2269 Oregon",
//     "WN498 Las Vegas",
//     "WN3145 Ohio",
//     "WN612 Alabama",
//     "WN4010 New York",
//     "WN1173 California",
//     "DL2120 Texas",
//     "KL5744 Illinois",
//     "WN678 Pennsylvania",
//   ],
//   ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"],
//   ["Ready to fly"],
// ]);

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  ["DL2120 Cancelled", "WN612 Cancelled", "WN1173 Cancelled", "SK430 Cancelled"],
  ["Cancelled"],
]);
