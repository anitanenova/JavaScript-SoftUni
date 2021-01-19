function solve(input) {
  let bigestNumbers = [];
  for (const row of input) {
    row.sort((a, b) => b - a);
    bigestNumbers.push(row[0]);
  }

  bigestNumbers.sort((a, b) => b - a);

  console.log(bigestNumbers[0]);
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
