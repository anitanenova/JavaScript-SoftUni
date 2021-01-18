function solve(firstNumber, secondNumber, thirdNumber) {
  let theLargestNumber;

  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    theLargestNumber = firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    theLargestNumber = secondNumber;
  } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    theLargestNumber = thirdNumber;
  }

  console.log(`The largest number is ${theLargestNumber}.`);
}

solve(5, -3, 16);
