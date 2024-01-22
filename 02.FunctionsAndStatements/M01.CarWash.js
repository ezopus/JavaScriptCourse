function calculateCleanliness(arr) {
  const carWash = {
    soap: (number) => (number += 10),
    water: (number) => (number *= 1.2),
    "vacuum cleaner": (number) => (number *= 1.25),
    mud: (number) => (number -= number * 0.1),
  };

  const result = arr.reduce((acc, curr) => {
    acc = carWash[curr](acc);
    return acc;
  }, 0);

  console.log(`The car is ${result.toFixed(2)}% clean.`);
}

calculateCleanliness(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);

calculateCleanliness(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
