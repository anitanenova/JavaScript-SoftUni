function solve(firstNum, secondNum, thirdNum) {
  let result = "";
  if (firstNum >= 0 && secondNum >= 0 && thirdNum >= 0) {
    result = "Positive";
  } else if (firstNum <= 0 && secondNum <= 0 && thirdNum >= 0) {
    result = "Positive";
  } else if (firstNum <= 0 && secondNum >= 0 && thirdNum <= 0) {
    result = "Positive";
  } else if (firstNum >= 0 && secondNum <= 0 && thirdNum <= 0) {
    result = "Positive";
  } else {
    result = "Negative";
  }
  return result;
}

console.log(solve(15, -15, -15));
