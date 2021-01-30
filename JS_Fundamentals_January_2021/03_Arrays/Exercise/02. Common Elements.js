function solve(firstArr, secondArr) {
  for (let i = 0; i < firstArr.length; i++) {
    let currentEl = firstArr[i];

    if (secondArr.includes(currentEl)) {
      console.log(currentEl);
    }
  }
}

solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
