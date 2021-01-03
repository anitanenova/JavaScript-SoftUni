function solve(input) {
  let inputWords = input.split(" ");

  for (const word of inputWords) {
    let wordWithoutSymbol = word.substr(1);
    if (word.startsWith("#") && /^[a-zA-Z]+$/.test(wordWithoutSymbol)) {
      console.log(wordWithoutSymbol);
    }
  }
}

console.log(
  solve("Nowadays everyone uses # to tag a #special word in #socialMedia")
);
