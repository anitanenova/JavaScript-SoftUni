function solve(inputString) {
  let indexes = [];

  let characters = inputString.split("");

  for (const index in characters) {
    let char = characters[index];
    let asciiValue = char.charCodeAt(0);

    if (asciiValue >= 65 && asciiValue <= 90) {
      indexes.push(Number(index));
    }
  }
  let words = [];

  for (let i = 0; i < indexes.length; i++) {
    words.push(inputString.substring(indexes[i], indexes[i + 1]));
  }

  console.log(words.join(", "));
}

console.log(solve("SplitMeIfYouCanHaHaYouCantOrYouCan"));
