function sum(number) {
  let oddSum = 0;
  let evenSum = 0;

  number = number.toString();

  for (let i = 0; i < number.length; i++) {
    if (Number(number[i]) % 2 == 0) {
      evenSum += Number(number[i]);
    } else {
      oddSum += Number(number[i]);
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
