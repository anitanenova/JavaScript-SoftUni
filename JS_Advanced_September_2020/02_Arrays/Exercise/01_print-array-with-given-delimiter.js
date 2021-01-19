function solve(input) {
  const delimiter = input.pop();

  console.log(input.join(delimiter));
}

solve(["One", "Two", "Three", "Four", "Five", "-"]);
