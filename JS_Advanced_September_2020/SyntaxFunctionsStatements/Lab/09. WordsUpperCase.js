function solve(input) {
  let toUpper = input.toUpperCase();
  console.log(toUpper.match(/\w+/g).join(", "));
}

console.log(solve("Hi, how are you?"));
