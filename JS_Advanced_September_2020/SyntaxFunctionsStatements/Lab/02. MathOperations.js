function solve(firstNum, secondNum, operator) {
  let result;
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "%":
      result = firstNum % secondNum;
      break;
    case "**":
      result = firstNum ** secondNum;
      break;

    default:
      result = firstNum ** secondNum;
      break;
  }
  console.log(result);
}

console.log(solve(5, 6, "+"));
