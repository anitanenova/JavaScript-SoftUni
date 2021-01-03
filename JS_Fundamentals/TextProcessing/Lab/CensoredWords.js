function solve(text, word) {
  while (text.indexOf(word) > -1) {
    text = text.replace(word, "*".repeat(word.length));
  }

  console.log(text);
}

console.log(solve("A small sentence with some words", "small"));
