function meetingChecker(arr) {
  const result = arr.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");
    if (acc[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      acc[day] = name;
    }
    return acc;
  }, {});

  Object.keys(result).forEach((key) => {
    console.log(`${key} -> ${result[key]}`);
  });
}

meetingChecker(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

meetingChecker([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
