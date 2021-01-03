function solve(arr) {
  let num = arr;
  while (num.length > 1) {
    let condense = [];
    for (let i = 0; i < num.length - 1; i++) {
      condense[i] = Number(num[i] + num[i + 1]);
    }
    num = condense;
    condense = 0;
  }
  console.log(Number(num));
}

solve([2, 10, 3]);
