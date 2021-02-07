function signCheck(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
    return "Positive";
  } else if (firstNumber <= 0 && secondNumber <= 0 && thirdNumber >= 0) {
    return "Positive";
  } else if (firstNumber <= 0 && secondNumber >= 0 && thirdNumber <= 0) {
    return "Positive";
  } else if (firstNumber >= 0 && secondNumber <= 0 && thirdNumber <= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(signCheck(-6, 0, 1));
