function solve(firstNum, secondNum, thirdNum) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  thirdNum = Number(thirdNum);

  let sum = firstNum + secondNum + thirdNum;

  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

solve(9, 100, 1.1);
