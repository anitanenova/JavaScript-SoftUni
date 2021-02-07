function printCharacters(first, second) {
  let firstChar = charToAscii(first);
  let secondChar = charToAscii(second);

  let startChar = Math.min(firstChar, secondChar);
  let endChar = Math.max(firstChar, secondChar);

  function charToAscii(char) {
    return char.charCodeAt(0);
  }

  function asciiToChar(number) {
    return String.fromCharCode(number);
  }

  let arrNums = [];

  for (let i = startChar + 1; i < endChar; i++) {
    arrNums.push(i);
  }

  return arrNums.map((x) => asciiToChar(x)).join(" ");
}
