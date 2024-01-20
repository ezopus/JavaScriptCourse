function convertToObject(str) {
  let result = JSON.parse(str);

  Object.entries(result).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
