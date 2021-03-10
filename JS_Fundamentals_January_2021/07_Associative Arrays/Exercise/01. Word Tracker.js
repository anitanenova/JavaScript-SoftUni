function solve(input) {
  let words = input.shift().split(" ");
  let wordsObj = {};
  let result = "";

  words.map((word) => {
    wordsObj[word] = 0;
  });

  input.map((word) => {
    if (wordsObj.hasOwnProperty(word)) {
      wordsObj[word]++;
    }
  });

  Object.keys(wordsObj)
    .sort((a, b) => {
      return wordsObj[b] - wordsObj[a];
    })
    .forEach((key) => {
      result += `${key} - ${wordsObj[key]}\n`;
    });

  return result;
}
