function solve(numbers) {
  let k = numbers.shift();

  let firstPart = numbers.slice(0, k);
  let secondPart = numbers.slice(numbers.length - k);

  console.log(firstPart.join(" "));
  console.log(secondPart.join(" "));
}

console.log(solve([3, 6, 7, 8, 9]));
