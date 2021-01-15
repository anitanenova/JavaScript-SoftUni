function solve(number) {
  let reminder;
  let arrNumbers = [];
  while (number != 0) {
    reminder = number % 2;
    arrNumbers.push(reminder);
    number /= 2;
    number = Math.floor(number);
  }

  for (let number of arrNumbers.reverse()) {
    console.log(number);
  }
}

console.log(solve(20));
