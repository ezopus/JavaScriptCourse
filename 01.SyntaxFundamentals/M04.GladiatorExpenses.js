function calculateExpenses(fights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  const result =
    Math.floor(fights / 2) * helmetPrice +
    Math.floor(fights / 3) * swordPrice +
    Math.floor(fights / 6) * shieldPrice +
    Math.floor(fights / 12) * armorPrice;
  console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}

calculateExpenses(7, 2, 3, 4, 5);
calculateExpenses(23, 12.5, 21.5, 40, 200);
