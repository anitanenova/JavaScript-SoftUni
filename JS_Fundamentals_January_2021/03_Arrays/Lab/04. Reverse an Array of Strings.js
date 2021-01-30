function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let firstEl = arr[i];
    let lastEl = arr[arr.length - 1 - i];

    arr[i] = lastEl;
    arr[arr.length - 1 - i] = firstEl;
  }

  console.log(arr.join(" "));
}

solve(["a", "b", "c", "d", "e"]);
