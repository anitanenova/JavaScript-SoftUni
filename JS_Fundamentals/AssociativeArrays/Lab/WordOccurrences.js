function solve(input) {
  let words = new Map();
  let counter = 1;
  for (const word of input) {
    if (words.has(word)) {
      let oldCounter = words.get(word);
      words.set(word, oldCounter + 1);
    } else {
      words.set(word, counter);
    }
  }

  let wordsArrSorted = Array.from(words).sort((a, b) => b[1] - a[1]);
  for (let kvp of wordsArrSorted) {
    console.log(`${kvp[0]} -> ${kvp[1]} times`);
  }
}

console.log(
  solve([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
  ])
);
