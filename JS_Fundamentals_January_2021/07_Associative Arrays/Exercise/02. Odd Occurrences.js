function solve(input) {
  let wordsArr = input.split(" ");

  let wordsObj = {};
  let oddOccurrences = [];

  wordsArr.map((word) => {
    word = word.toLowerCase();
    if (wordsObj.hasOwnProperty(word)) {
      wordsObj[word]++;
    } else {
      wordsObj[word] = 1;
    }
  });

  Object.keys(wordsObj).forEach((key) => {
    if (wordsObj[key] % 2 !== 0) {
      oddOccurrences.push(key);
    }
  });

  return oddOccurrences.join(" ");
}
