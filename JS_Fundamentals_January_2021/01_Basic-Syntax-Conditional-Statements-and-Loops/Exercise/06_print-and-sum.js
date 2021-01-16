function solve(firstNumber, secondNumber) {
  let numbers = [];
  let sum = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    numbers.push(i);
    sum += i;
  }

  console.log(numbers.join(" "));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
