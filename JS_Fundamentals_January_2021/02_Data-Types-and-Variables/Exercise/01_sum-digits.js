function solve(number) {
  let numberStr = number.toString();
  let sum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }

  console.log(sum);
}

solve(245678);
