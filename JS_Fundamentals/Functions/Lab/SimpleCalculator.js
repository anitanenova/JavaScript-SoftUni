function calculator(firstNumber, secondNumber, operator) {
  let operation = null;
  switch (operator) {
    case "multiply":
      operation = (a, b) => a * b;
      break;
    case "divide":
      operation = (a, b) => a / b;
      break;
    case "add":
      operation = (a, b) => a + b;
      break;
    case "substrat":
      operation = (a, b) => a - b;
      break;
    default:
      operation = (a, b) => a - b;
      break;
  }

  let result = operation(firstNumber, secondNumber);

  return result;
}

console.log(calculator(5, 5, "substact"));
