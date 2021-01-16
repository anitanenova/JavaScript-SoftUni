function solve(input) {
  const priceBitcoin = 11949.16;
  const priceGold = 67.51;

  let dayOfFirstPurchase = 0;
  let countBuyedBitcoins = 0;
  let sum = 0;

  for (let i = 1; i <= input.length; i++) {
    if (i % 3 == 0) {
      sum += input[i - 1] * 0.7 * priceGold;
    } else {
      sum += input[i - 1] * priceGold;
    }

    while (sum - priceBitcoin >= 0) {
      sum = sum - priceBitcoin;

      countBuyedBitcoins++;

      if (dayOfFirstPurchase == 0) {
        dayOfFirstPurchase = i;
      }
    }
  }

  console.log(`Bought bitcoins: ${countBuyedBitcoins}`);

  if (dayOfFirstPurchase != 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
  }

  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);
