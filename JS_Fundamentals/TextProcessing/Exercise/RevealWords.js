function solve(words, text) {
  let wordsArr = words.split(", ");

  let textWordsArr = text.split(" ");

  for (const wordArr of wordsArr) {
    for (const textWord of textWordsArr) {
      if (textWord.startsWith("*") && textWord.length == wordArr.length) {
        text = text.replace("*".repeat(textWord.length), wordArr);
      }
    }
  }
  console.log(text);
}

console.log(
  solve(
    "great",
    "softuni is ***** place for learning new programming languages"
  )
);
