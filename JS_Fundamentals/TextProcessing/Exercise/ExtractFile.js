function solve(input) {
  let index = input.lastIndexOf("\\");
  let substr = input.substr(index + 1);
  let indexExtension = substr.lastIndexOf(".");
  let name = substr.substr(0, indexExtension);
  let extension = substr.substr(indexExtension + 1);
  console.log(`File name: ${name}\nFile extension: ${extension}`);
}

console.log(solve("C:\\Internal\\training-internal\\Template.pptx"));
