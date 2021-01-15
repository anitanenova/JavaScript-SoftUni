function solve(number) {
  let sumEven = 0;
  let sumOdd = 0;
  let numStr = number.toString();

  for (let i = 0; i < numStr.length; i++) {
    let element = Number(numStr[i]);
    if (element % 2 == 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  }
  return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

console.log(solve(1000435));
