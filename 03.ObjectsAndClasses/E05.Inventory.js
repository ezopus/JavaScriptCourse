function createHeroes(arr) {
  const heroes = arr.reduce((acc, curr) => {
    let [name, level, items] = curr.split(" / ");
    level = Number(level);
    acc.push({ name, level, items });
    return acc;
  }, []);

  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items}`);
    });
}

createHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
