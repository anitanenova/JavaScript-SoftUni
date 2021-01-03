function solve(arr) {
  let nStep = arr.pop();

  for (let i = 0; i < arr.length; i += Number(nStep)) {
    console.log(arr[i]);
  }
}

console.log(solve(["5", "20", "31", "4", "20", "2"]));
