function solve(input) {
  let result = "";

  let inputArr = input.split(" ");

  inputArr.map((word) => {
    result += `${word}\n`;
  });

  return result;
}
