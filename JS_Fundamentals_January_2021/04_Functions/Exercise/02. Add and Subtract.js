function calculate(firstNum, secondNum, thirdNum) {
  return subtract(sum(firstNum, secondNum), thirdNum);

  function sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  function subtract(sum, thirdNum) {
    return sum - thirdNum;
  }
}

console.log(calculate(23, 6, 10));
