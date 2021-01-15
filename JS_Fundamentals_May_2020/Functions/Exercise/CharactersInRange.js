function solve(firstCharacter, secondCharacter) {
  let startCharacter = Math.min(
    firstCharacter.charCodeAt(0),
    secondCharacter.charCodeAt(0)
  );
  let endCharacter = Math.max(
    firstCharacter.charCodeAt(0),
    secondCharacter.charCodeAt(0)
  );
  let result = "";
  for (let i = startCharacter + 1; i < endCharacter; i++) {
    result += String.fromCharCode(i) + " ";
  }
  return result;
}

console.log(solve("a", "d"));
