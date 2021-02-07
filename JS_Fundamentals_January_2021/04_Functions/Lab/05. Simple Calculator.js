function simpleCalculator(firstNumber, secondNumber, operator) {
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;

  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);

    case "subtract":
      return subtract(firstNumber, secondNumber);

    case "multiply":
      return multiply(firstNumber, secondNumber);

    case "divide":
      return divide(firstNumber, secondNumber);
  }
}

console.log(simpleCalculator(50, 13, "subtract"));
