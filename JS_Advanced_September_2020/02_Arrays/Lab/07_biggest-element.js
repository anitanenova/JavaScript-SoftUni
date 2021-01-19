function solve(input) {
  let biggestNumbers = [];
  for (const row of input) {
    row.sort((a, b) => b - a);
    biggestNumbers.push(row[0]);
  }

  biggestNumbers.sort((a, b) => b - a);

  console.log(biggestNumbers[0]);
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
