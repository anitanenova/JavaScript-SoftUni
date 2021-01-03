function solve(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    console.log((firstNumber + secondNumber).toFixed(2));
  } else if (operator == "-") {
    console.log((firstNumber - secondNumber).toFixed(2));
  } else if (operator == "*") {
    console.log((firstNumber * secondNumber).toFixed(2));
  } else if (operator == "/") {
    console.log((firstNumber / secondNumber).toFixed(2));
  }
}
solve(15.51, "+", 5);
