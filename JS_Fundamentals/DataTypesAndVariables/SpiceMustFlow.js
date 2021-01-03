function solve(startingYield) {
  let collectedSpices = 0;
  let days = 0;
  while (startingYield >= 100) {
    collectedSpices += startingYield - 26;
    days++;
    startingYield -= 10;
  }
  collectedSpices -= 26;
  console.log(days);

  console.log(Math.max(collectedSpices, 0));
}

solve(111);
