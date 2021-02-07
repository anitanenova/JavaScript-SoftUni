function calculateFactorial(firstNumber, secondNumber) {
  function factorial(x) {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }

  let firstSumFactorial = factorial(firstNumber);
  let secondSumFactorial = factorial(secondNumber);

  return (firstSumFactorial / secondSumFactorial).toFixed(2);
}
