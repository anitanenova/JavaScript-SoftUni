function solve(number) {
  let row = "";
  for (i = 0; i < number; i++) {
    row += number + " ";
  }

  for (let i = 0; i < number; i++) {
    result = console.log(row);
  }

  return result;
}

console.log(solve(3));
