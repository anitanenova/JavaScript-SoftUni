function solve(input) {
  if (input == null) {
    input = 5;
  }

  for (let i = 0; i < input; i++) {
    console.log("* ".repeat(input));
  }
}

console.log(solve());
