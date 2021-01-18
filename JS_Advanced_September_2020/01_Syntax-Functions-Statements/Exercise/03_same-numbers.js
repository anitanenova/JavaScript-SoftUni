function solve(number) {
  let numberArr = number.toString().split("");
  let equal = true;

  let sum = 0;

  for (let i = 0; i < numberArr.length; i++) {
    sum += Number(numberArr[i]);

    if (i + 1 != numberArr.length) {
      if (numberArr[i] != numberArr[i + 1]) {
        equal = false;
      }
    }
  }

  console.log(equal);
  console.log(sum);
}

solve(2222222);
