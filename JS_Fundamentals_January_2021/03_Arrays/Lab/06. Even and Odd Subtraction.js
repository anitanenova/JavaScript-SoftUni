function solve(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];

    if (currentEl % 2 === 0) {
      sumEven += currentEl;
    } else {
      sumOdd += currentEl;
    }
  }

  console.log(sumEven - sumOdd);
}

solve([1, 2, 3, 4, 5, 6]);
