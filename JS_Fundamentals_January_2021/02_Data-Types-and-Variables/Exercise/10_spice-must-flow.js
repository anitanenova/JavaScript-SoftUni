function solve(yield) {
  let startingYield = yield;
  let days = 0;
  let restYield = 0;

  while (startingYield >= 100) {
    days++;
    restYield += startingYield - 26;
    startingYield -= 10;
  }
  if (startingYield < 100 && days == 0) {
    console.log(days);
    console.log(restYield);
  } else {
    restYield -= 26;
    console.log(days);
    console.log(restYield);
  }
}

solve(450);
