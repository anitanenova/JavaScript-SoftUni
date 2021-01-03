function solve(arr) {
  let sortAlphabetical = arr.sort((a, b) => a.localeCompare(b));
  let sortLenght = sortAlphabetical.sort((a, b) => a.length - b.length);
  for (const el of sortLenght) {
    console.log(el);
  }
}

console.log(solve(["alpha", "beta", "gamma"]));
