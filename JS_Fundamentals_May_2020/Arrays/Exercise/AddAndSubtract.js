function solve(numbers) {
  let originalArrSum = 0;
  let modifiedArrSum = 0;
  let modifiedArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      modifiedArr[i] = Number(numbers[i]) + i;
    } else {
      modifiedArr[i] = Number(numbers[i]) - i;
    }
    modifiedArrSum += Number(modifiedArr[i]);
    originalArrSum += Number(numbers[i]);
  }

  console.log(modifiedArr);
  console.log(originalArrSum);
  console.log(modifiedArrSum);
}

solve(["5", "15", "23", "56", "35"]);
