function solve(arr) {
  let sum = 0;
  let sumInverseValue = 0;
  let sumConcat = "";

  for (const num of arr) {
    sum += num;
    sumConcat += num;
  }

  for (let i = 0; i < arr.length; i++) {
    sumInverseValue += 1 / arr[i];
  }

  console.log(sum);
  console.log(sumInverseValue);
  console.log(sumConcat);
}

console.log(solve([1, 2, 3]));
