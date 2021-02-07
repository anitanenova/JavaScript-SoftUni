function perfectNumber(number) {
  let divisorSum = 0;

  for (let i = 0; i <= number / 2; i++) {
    if (number % i == 0) {
      divisorSum += i;
    }
  }

  if (divisorSum === number && divisorSum !== 0) {
    return "We have a perfect number!";
  } else {
    return "It's not so perfect.";
  }
}
