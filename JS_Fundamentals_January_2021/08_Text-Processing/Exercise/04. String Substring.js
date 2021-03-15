function solve(word, text) {
  let result = "";

  word = word.toLowerCase();
  text = text.toLowerCase().split(" ");

  if (text.includes(word)) {
    result = word;
  } else {
    result = `${word} not found!`;
  }

  return result;
}
