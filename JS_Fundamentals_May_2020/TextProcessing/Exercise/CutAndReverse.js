function solve(input) {
  let chars = input.split("");

  let reverseChars = chars.reverse();

  let newInput = reverseChars.join("");
  let length = newInput.length;
  let firstPart = newInput.substr(length / 2);
  let secondPart = newInput.substr(0, length / 2);
  console.log(firstPart);
  console.log(secondPart);
}

console.log(solve("tluciffiDsIsihTgnizamAoSsIsihT"));
