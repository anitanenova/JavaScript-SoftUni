function solve(input) {
  let result = "";

  let words = input.split(" ");

  words.map((word) => {
    if (word.includes("#") && word.length > 0) {
      let specialWord = word.substring(1);

      if (/^[a-zA-Z]+$/.test(specialWord)) {
        result += `${specialWord}\n`;
      }
    }
  });

  return result;
}
