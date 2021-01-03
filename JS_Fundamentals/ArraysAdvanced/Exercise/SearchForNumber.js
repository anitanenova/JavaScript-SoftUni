function solve(arr, specialNumbers) {
  let numTake = specialNumbers[0];
  let takesNums = arr.splice(0, numTake);
  let numDelete = specialNumbers[1];
  let restNums = takesNums.splice(numDelete);
  let numSearch = specialNumbers[2];

  let count = 0;
  for (let i = 0; i < restNums.length; i++) {
    if (restNums[i] == numSearch) {
      count++;
    }
  }

  return `Number ${numSearch} occurs ${count} times.`;
}

console.log(solve([5, 2, 3, 4, 1, 6], [5, 2, 3]));
