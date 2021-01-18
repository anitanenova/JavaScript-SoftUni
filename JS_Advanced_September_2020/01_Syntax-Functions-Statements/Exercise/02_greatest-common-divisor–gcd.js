function solve(firstNumber, secondNumber) {
  let result = 0;
  for (let i = 1; i <= secondNumber; i++) {
    if (firstNumber % i == 0 && secondNumber % i == 0) {
      result = i;
    }
  }

  console.log(result);
}

solve(2154, 458);
