function solve(arr) {
  let sumOriginalArr = 0;
  let sumModifiedArr = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentEl = Number(arr[i]);
    sumOriginalArr += currentEl;

    if (currentEl % 2 == 0) {
      arr[i] = currentEl + i;
    } else {
      arr[i] = currentEl - i;
    }

    sumModifiedArr += arr[i];
  }

  console.log(arr);
  console.log(sumOriginalArr);
  console.log(sumModifiedArr);
}

solve([5, 15, 23, 56, 35]);
