function solve(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];

  console.log(Number(first) + Number(last));
}

console.log(solve(["20", "30", "40"]));
