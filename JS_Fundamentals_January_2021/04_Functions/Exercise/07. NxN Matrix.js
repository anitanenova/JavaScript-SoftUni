function matrix(number) {
  number = number.toString();
  let result = "";

  for (let i = 0; i < number; i++) {
    result += `${(number + " ").repeat(number)}\n`;
  }
  return result;
}

console.log(matrix(3));
