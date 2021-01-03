function solve(arr, bombInfo) {
  let bomb = bombInfo[0];
  let range = bombInfo[1];

  let index = arr.indexOf(bomb);

  while (index > -1) {
    arr.splice(Math.max(index - range, 0), Math.min(range, index)); //left detonation
    index = arr.indexOf(bomb);
    arr.splice(index, range + 1); //right detonation
    index = arr.indexOf(bomb);
  }

  function calculateSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  return calculateSum(arr);
}

console.log(solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
