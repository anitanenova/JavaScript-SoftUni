function solve(numbers) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenSum += Number(numbers[i]);
    } else {
      oddSum += Number(numbers[i]);
    }
  }
  console.log(evenSum - oddSum);
}

solve(["1", "2", "3", "4", "5", "6"]);
