function solve(text, word) {
  let wordLength = word.length;
  let symbols = "*".repeat(wordLength);

  while (text.indexOf(word) > -1) {
    text = text.replace(word, symbols);
  }
  return text;
}
