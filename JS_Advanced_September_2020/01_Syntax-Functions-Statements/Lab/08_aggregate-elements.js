function solve(input) {
  let sum = 0;
  let sumInverse = 0;
  let concatResult = "";

  input.forEach((element) => {
    sum += element;
    sumInverse += 1 / element;
    concatResult += element.toString();
  });

  console.log(sum);
  console.log(sumInverse);
  console.log(concatResult);
}

solve([1, 2, 3]);
