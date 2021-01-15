function solve(arr) {
  let theBiggestNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => b - a);
    theBiggestNumbers.push(arr[i][0]);
  }
  theBiggestNumbers.sort((a, b) => b - a);
  console.log(theBiggestNumbers[0]);
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
