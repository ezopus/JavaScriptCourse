function printTowns(arr) {
  const towns = arr.reduce((acc, curr) => {
    let [town, latitude, longitude] = curr.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    acc.push({ town, latitude, longitude });
    return acc;
  }, []);

  towns.forEach((town) => {
    console.log(town);
  });
}

printTowns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
