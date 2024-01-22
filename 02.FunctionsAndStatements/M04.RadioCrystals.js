function calculateOperations(arr) {
  let [target, ...crystals] = arr;

  function cutCrystal(target, crystal) {
    let count = 0;
    while (crystal / 4 >= target) {
      crystal /= 4;
      count++;
    }
    console.log(`Cut x${count}`);
    console.log(`Transporting and washing`);
    return Math.floor(crystal);
  }

  function lapCrystal(target, crystal) {
    let count = 0;
    while (crystal - crystal * 0.2 >= target) {
      crystal -= crystal * 0.2;
      count++;
    }
    console.log(`Lap x${count}`);
    console.log(`Transporting and washing`);
    return Math.floor(crystal);
  }

  function grindCrystal(target, crystal) {
    let count = 0;
    while (crystal - 20 >= target) {
      crystal -= 20;
      count++;
    }
    console.log(`Grind x${count}`);
    console.log(`Transporting and washing`);
    return Math.floor(crystal);
  }

  function etchCrystal(target, crystal) {
    let count = 0;
    while (crystal - 2 >= target - 1) {
      crystal -= 2;
      count++;
    }
    console.log(`Etch x${count}`);
    console.log(`Transporting and washing`);
    return Math.floor(crystal);
  }

  function xrayCrystal(target, crystal) {
    if (crystal + 1 === target) {
      console.log(`X-ray x1`);
      return crystal + 1;
    }
    return crystal;
  }

  for (crystal of crystals) {
    console.log(`Processing chunk ${crystal} microns`);
    while (crystal > target) {
      if (crystal / 4 >= target) {
        crystal = cutCrystal(target, crystal);
      } else if (crystal - crystal * 0.2 >= target) {
        crystal = lapCrystal(target, crystal);
      } else if (crystal - 20 >= target) {
        crystal = grindCrystal(target, crystal);
      } else if (crystal - 2 >= target - 1) {
        crystal = etchCrystal(target, crystal);
      }
    }
    crystal = xrayCrystal(target, crystal);
    console.log(`Finished crystal ${crystal} microns`);
  }
}

calculateOperations([1375, 50000]);
