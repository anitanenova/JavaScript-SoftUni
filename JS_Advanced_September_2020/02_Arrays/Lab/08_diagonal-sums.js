function solve(matrix) {
  let diagonal1 = 0,
    diagonal2 = 0;

  for (let row = 0; row < matrix.length; row++) {
    diagonal1 += matrix[row][row];
    diagonal2 += matrix[row][matrix.length - row - 1];
  }
  console.log(diagonal1 + " " + diagonal2);
}

solve([
  [20, 40],
  [10, 60],
]);
