function solve(arr) {
  let evenPositionsNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenPositionsNumbers.push(arr[i]);
    }
  }

  console.log(evenPositionsNumbers.join(" "));
}

console.log(solve(["20", "30", "40"]));
