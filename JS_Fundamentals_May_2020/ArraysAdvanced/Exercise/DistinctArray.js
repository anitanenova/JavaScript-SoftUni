function solve(numbers) {
  let output = [];

  for (let number of numbers) {
    if (!output.includes(number)) {
      output.push(number);
    }
  }

  return output.join(" ");
}

console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));
