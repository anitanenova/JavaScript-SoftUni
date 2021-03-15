function solve(input) {
  let characters = input.split("");

  let result = "";

  for (let i = 0; i < characters.length; i++) {
    if (characters[i - 1] != characters[i]) {
      result += characters[i];
    }
  }

  return result;
}
