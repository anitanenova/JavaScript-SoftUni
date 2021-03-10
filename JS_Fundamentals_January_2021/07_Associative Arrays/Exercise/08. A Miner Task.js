function solve(input) {
  let words = {};

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      if (!words.hasOwnProperty(input[i])) {
        words[input[i]] = 0;
      }
    } else {
      words[input[i - 1]] += Number(input[i]);
    }
  }

  let result = "";

  Object.keys(words).map((word) => {
    result += `${word} -> ${words[word]}\n`;
  });

  return result;
}
