function printDNA(length) {
  const dnaGroups = [
    ["A", "T"],
    ["C", "G"],
    ["T", "T"],
    ["A", "G"],
    ["G", "G"],
  ];

  for (let i = 0; i < length; i++) {
    const [x, y] = dnaGroups[i % dnaGroups.length];
    if (i % 4 === 0) {
      console.log(`**${x}${y}**`);
    } else if (i % 2 !== 0) {
      console.log(`*${x}--${y}*`);
    } else {
      console.log(`${x}----${y}`);
    }
  }
}

printDNA(10);
