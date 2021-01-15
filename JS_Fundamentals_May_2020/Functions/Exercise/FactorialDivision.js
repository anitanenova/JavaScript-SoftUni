function solve(firstNumber, secondNumber) {
  function sumFactorial(number) {
    let result = number;
    for (let i = 1; i < number; i++) {
      result *= i;
    }
    return result;
  }

  return (sumFactorial(firstNumber) / sumFactorial(secondNumber)).toFixed(2);
}

console.log(solve(5, 2));
