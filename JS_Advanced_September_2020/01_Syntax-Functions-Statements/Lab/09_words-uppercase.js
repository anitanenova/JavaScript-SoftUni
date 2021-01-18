function solve(input) {
  let toUpper = input.toUpperCase();
  console.log(toUpper.match(/\w+/g).join(", "));
}
solve("Hi, how are you?");
