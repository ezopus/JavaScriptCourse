function roadRadar(speed, area) {
  let difference = 0;
  let status = "";
  let zones = new Map();
  zones.set("residential", 20);
  zones.set("city", 50);
  zones.set("interstate", 90);
  zones.set("motorway", 130);
  if (
    (area === "city" && speed <= 50) ||
    (area === "residential" && speed <= 20) ||
    (area === "interstate" && speed <= 90) ||
    (area === "motorway" && speed <= 130)
  ) {
    console.log(`Driving ${speed} km/h in a ${zones.get(area)} zone`);
  } else {
    switch (area) {
      case "residential":
        difference = speed - 20;
        break;
      case "city":
        difference = speed - 50;
        break;
      case "interstate":
        difference = speed - 90;
        break;
      case "motorway":
        difference = speed - 130;
        break;
    }
    if (difference <= 20) status = "speeding";
    else if (difference <= 40) status = "excessive speeding";
    else status = "reckless driving";
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${zones.get(
        area
      )} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
