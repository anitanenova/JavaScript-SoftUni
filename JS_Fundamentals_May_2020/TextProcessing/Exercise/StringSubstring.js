function solve(word, input) {
  let wordCaseInsensitive = word.toLowerCase();
  let inputCaseInsensitiveArr = input.toLowerCase().split(" ");

  if (inputCaseInsensitiveArr.includes(wordCaseInsensitive)) {
    console.log(wordCaseInsensitive);
  } else {
    console.log(`${wordCaseInsensitive} not found!`);
  }
}

console.log(solve("javascript", "JavaScript is the best programming language"));
