function solve(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr[0] + " " + sortArr[1]);
}

console.log(solve([30, 15, 50, 5]));
