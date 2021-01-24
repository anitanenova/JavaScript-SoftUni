function solve(n) {
  number = Number(n);
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let iStr = i.toString();
    for (let index = 0; index < iStr.length; index++) {
      sum += Number(iStr[index]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${iStr} -> True`);
      sum = 0;
    } else {
      console.log(`${iStr} -> False`);
      sum = 0;
    }
  }
}

solve(15);
