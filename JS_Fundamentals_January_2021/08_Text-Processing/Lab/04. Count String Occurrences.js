function solve(text, word) {
  let index = text.indexOf(` ${word} `);
  let count = 0;
  while (index > -1) {
    count++;
    index = text.indexOf(` ${word} `, index + 1);
  }

  if (text.startsWith(word)) {
    count++;
  }

  if (text.endsWith(word)) {
    count++;
  }

  return count;
}
