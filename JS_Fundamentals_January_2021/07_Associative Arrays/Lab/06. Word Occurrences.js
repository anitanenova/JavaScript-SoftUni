function solve(input) {
  let words = {};

  let result = "";

  input.map((str) => {
    if (words.hasOwnProperty(str)) {
      words[str]++;
    } else {
      words[str] = 1;
    }
  });

  Object.keys(words)
    .sort((a, b) => {
      return words[b] - words[a];
    })
    .forEach((key) => {
      result += `${key} -> ${words[key]} times\n`;
    });

  return result;
}
