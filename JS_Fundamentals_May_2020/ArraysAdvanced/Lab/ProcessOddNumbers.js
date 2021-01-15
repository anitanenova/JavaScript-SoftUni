function solve(numbers) {
  let arr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 != 0) {
      arr.unshift(numbers[i] * 2);
    }
  }
  return arr.join(" ");
}

console.log(solve([3, 0, 10, 4, 7, 3]));
