function pyramidConstruction(base, increment) {
  const maxRows = base % 2 != 0 ? Math.floor(base / 2) + 1 : base / 2;
  const finalHeight = Math.floor(maxRows * increment);
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let rows = 1;

  for (let i = base; i > 0; i -= 2) {
    let currentBase = i ** 2 * increment;
    let currentStone = (i - 2) ** 2 * increment;
    let currentMarble = currentBase - currentStone;

    if (rows !== maxRows) {
      stone += currentStone;
      if (rows % 5 === 0) {
        lapis += currentMarble;
      } else {
        marble += currentMarble;
      }
      rows++;
    } else {
      gold += i ** 2;
    }
  }

  console.log(`Stone required: ${Math.round(stone)}`);
  console.log(`Marble required: ${Math.round(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.round(lapis)}`);
  console.log(`Gold required: ${Math.round(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(finalHeight)}`);
}

//pyramidConstruction(11, 1);
// pyramidConstruction(11, 0.75);
// pyramidConstruction(12, 1);
// pyramidConstruction(23, 0.5);
