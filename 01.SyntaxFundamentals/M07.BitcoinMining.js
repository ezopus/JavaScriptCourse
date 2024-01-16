function bitcoinCalculator(arr) {
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;

  let bitcountCount = 0;
  let totalAmount = 0;
  let dayOfFirstBitcoin = 0;
  let hasBitcoin = false;

  for (let i = 0; i < arr.length; i++) {
    let currentDayGold = arr[i];

    if ((i + 1) % 3 === 0) {
      currentDayGold *= 0.7;
    }

    let currentDayValue = currentDayGold * goldPrice;
    totalAmount += currentDayValue;

    if (totalAmount >= bitcoinPrice) {
      let boughtBitcoins = Math.floor(totalAmount / bitcoinPrice);
      bitcountCount += boughtBitcoins;
      totalAmount -= boughtBitcoins * bitcoinPrice;
    }

    if (bitcountCount > 0 && hasBitcoin === false) {
      dayOfFirstBitcoin = i + 1;
      hasBitcoin = true;
    }
  }

  console.log(`Bought bitcoins: ${bitcountCount}`);
  if (hasBitcoin) console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
  console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}

bitcoinCalculator([100, 200, 300]);
bitcoinCalculator([50, 100]);
bitcoinCalculator([3124.15, 504.212, 2511.124]);
