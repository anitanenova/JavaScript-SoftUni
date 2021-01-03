function solve(arr) {
  let arrSort = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    if (currentEl < 0) {
      arrSort.unshift(currentEl);
    } else {
      arrSort.push(currentEl);
    }
  }

  console.log(arrSort);
}

console.log(solve([3, -2, 0, -1]));
