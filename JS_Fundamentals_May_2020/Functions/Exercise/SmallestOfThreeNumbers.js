function compare(firstNum, secondNum, thirdNum) {
  let result = 0;
  if (firstNum < secondNum && firstNum < thirdNum) {
    result = firstNum;
  } else if (secondNum < firstNum && secondNum < thirdNum) {
    result = secondNum;
  } else {
    result = thirdNum;
  }

  return result;
}

console.log(compare(2, 5, 3));
