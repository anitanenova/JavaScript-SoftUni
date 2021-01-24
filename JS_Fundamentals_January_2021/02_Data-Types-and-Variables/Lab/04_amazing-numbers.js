function solve(input) {
  let numberStr = input.toString();
  let sum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }

  console.log(
    sum.toString().includes(9)
      ? `${numberStr} Amazing? True`
      : `${numberStr} Amazing? False`
  );
}

solve(1233);
