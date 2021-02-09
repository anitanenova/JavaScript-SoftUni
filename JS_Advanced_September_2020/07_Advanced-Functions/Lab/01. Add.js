function solution(number) {
  let firstNumber = number;
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}
