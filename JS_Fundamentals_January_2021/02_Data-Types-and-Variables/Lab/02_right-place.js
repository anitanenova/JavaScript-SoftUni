function solve(toReplace, character, toCompare) {
  toReplace = toReplace.replace("_", character);

  console.log(`${toCompare === toReplace ? "Matched" : "Not Matched"}`);
}

solve("Str_ng", "I", "Strong");
