function solve(input) {
  let lastPathSymbol = input.lastIndexOf("\\");

  let file = input.substring(lastPathSymbol + 1);

  let lastDotSymbol = file.lastIndexOf(".");

  let name = file.substring(0, lastDotSymbol);
  let extension = file.substring(lastDotSymbol + 1);

  let result = `File name: ${name}\nFile extension: ${extension}`;

  return result;
}
