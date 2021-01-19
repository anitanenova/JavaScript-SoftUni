function solve(input) {
  let sortByAlphabetical = input.sort((a, b) => a.localeCompare(b));
  let sortByLength = sortByAlphabetical.sort((a, b) => a.length - b.length);

  sortByLength.map((el) => console.log(el));
}

solve(["alpha", "beta", "gamma"]);
