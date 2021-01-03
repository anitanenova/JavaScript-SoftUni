function solve(matrix) {
  let sumRow = 0;
  let sumCol = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let el1 = matrix[row][col];
      let el2 = matrix[col][row];
      sumRow += Number(el1);
      sumCol += Number(el2);
    }
    if (sumRow != sumCol && row + 1 != matrix.length) {
      console.log(false);
      break;
    } else if (sumRow == sumCol && row + 1 == matrix.length) {
      console.log(true);
      break;
    } else {
      sumRow = 0;
      sumCol = 0;
    }
  }
}

console.log(
  solve([
    [4, 5, 9],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
