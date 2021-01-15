function solve(word) {
  let characters = "";

  for (const char of word.split("")) {
    if (!characters.endsWith(char)) {
      characters += char;
    }
  }

  console.log(characters);
}

console.log(solve("aaaaabbbbbcdddeeeedssaa"));
