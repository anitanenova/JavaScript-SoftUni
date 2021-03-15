function solve(input) {
  let indexOfHalf = input.length / 2;

  let firstHalf = input.substring(0, indexOfHalf);
  let secondHalf = input.substring(indexOfHalf);

  function reverseStr(str) {
    return str.split("").reverse().join("");
  }

  let result = `${reverseStr(firstHalf)}\n${reverseStr(secondHalf)}`;

  return result;
}
