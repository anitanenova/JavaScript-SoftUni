function solve(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentEl = Number(arr[i]);
    if (currentEl % 2 == 0) {
      sum += currentEl;
    }
  }

  console.log(sum);
}

solve(["1", "2", "3", "4", "5", "6"]);
