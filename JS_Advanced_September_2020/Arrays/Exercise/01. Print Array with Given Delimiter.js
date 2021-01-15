function solve(arr) {
  let delimiter = arr.pop();
  console.log(arr.join(delimiter));
}

console.log(solve(["One", "Two", "Three", "Four", "Five", "-"]));
