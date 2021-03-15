function solve(words, text) {
  words = words.split(", ");

  words.map((word) => {
    let wordLength = word.length;

    text = text.replace("*".repeat(wordLength), word);
  });

  return text;
}
