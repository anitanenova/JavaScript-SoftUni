function solve(n) {
  let numberStart = 1;
  let sum = 0;
  while (n != 0) {
    if (numberStart % 2 != 0) {
      console.log(numberStart);
      sum += numberStart;
      n--;
    }

    numberStart++;
  }
  console.log(`Sum: ${sum}`);
}

solve(5);
