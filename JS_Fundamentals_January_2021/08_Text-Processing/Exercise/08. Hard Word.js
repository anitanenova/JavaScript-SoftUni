function solve(arr) {
  let [text, words] = arr;

  let textWords = text.split(" ");

  textWords.map((wordOfText, index) => {
    words.map((word) => {
      let wordLength = word.length;
      let wordInSymbols = "_".repeat(wordLength);

      if (wordOfText.includes("_")) {
        if (/[,.]/.test(wordOfText)) {
          let symbolOfWord = wordOfText.substring(wordOfText.length - 1);

          if (wordOfText === wordInSymbols.concat(symbolOfWord)) {
            word = word.concat(symbolOfWord);
            textWords.splice(index, 1, word);
          }
        } else if (wordOfText === wordInSymbols) {
          textWords.splice(index, 1, word);
        }
      }
    });
  });

  return textWords.join(" ");
}
