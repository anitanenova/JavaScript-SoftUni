function solve(first, second) {
  let firstNumber = Number(first);
  let secondNumber = Number(second);
  let sum = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }
  console.log(sum);
}

console.log(solve("1", "5"));
